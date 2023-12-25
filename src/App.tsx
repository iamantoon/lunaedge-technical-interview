import {useState, useEffect, useMemo} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {fetchPokemons} from './services/fetchPokemons';
import {IFullName} from './interfaces';
import ErrorMessage from './components/ErrorMessage';
import {IPokemon} from './interfaces';
import MySelect from './components/MySelect';
import MyPopUp from './components/MyPopUp';
import MyModal from './components/MyModal';

function App() {
    const {register, handleSubmit, getValues, formState: { errors, isValid }, reset} = useForm<IFullName>({mode: 'onBlur'});
    const [pokemons, setPokemons] = useState<IPokemon[]>([]);
    const [selectedPokemons, setSelectedPokemons] = useState<string[]>([]);
    const [isSelectVisible, setSelectVisible] = useState(false);
    const [filter, setFilter] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [isPopUpVisible, setPopUpVisible] = useState(false);
    const [certainPokemons, setCertainPokemons] = useState<any[]>([]);

    const onSubmit: SubmitHandler<IFullName> = async () => {
        if (selectedPokemons.length === 4){
            setModalVisible(true);

            const promises = selectedPokemons.map(async (p) => {
                return await fetchPokemons(p);
            });
      
            const results = await Promise.all(promises);
        
            setCertainPokemons((state) => [...state, ...results]);
        } else {
            setPopUpVisible(true);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPokemons();
            setPokemons(data);
        };
    
        fetchData();
    }, []);

    const handleSelectOption = (option: string) => {
        setSelectedPokemons(selected => [...selected, option])
    }   

    const filteredPokemons = useMemo(() => {
        return pokemons.filter(pokemon => 
            !selectedPokemons.includes(pokemon.name.toLowerCase()) && 
            pokemon.name.toLowerCase().startsWith(filter.toLowerCase())
        );
    }, [filter, pokemons, selectedPokemons]);

    const removePokemon = (index: number) => {
        const updatedPokemons = [...selectedPokemons];
        updatedPokemons.splice(index, 1);
        setSelectedPokemons(updatedPokemons);
    };

    const onAccept = () => {
        reset();
        setSelectedPokemons([]);
        setModalVisible(false);
        setCertainPokemons([]);
    }

    const onDecline = () => {
        setSelectedPokemons([]);
        setModalVisible(false);
        setCertainPokemons([]);
    }

    const handleDivClick = () => {
        setSelectVisible(false);
        setModalVisible(false);
    }

    const onAcceptPopUp = () => {
        setPopUpVisible(false);
        setSelectedPokemons([]);
    }

    const onDeclinePopUp = () => {
        setPopUpVisible(false);
    }
    
    return (
        <div onClick={handleDivClick}>
            <h1 className='mb-5 mt-5 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'><span className='text-yellow-500 dark:text-yellow-300'>Pokemon</span> API</h1>
            <form onSubmit={handleSubmit(onSubmit)} onClick={e => e.stopPropagation()} className='flex flex-col space-y-4 max-w-screen-md mx-auto' autoComplete='off'>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input 
                        {...register('firstname', {
                            required: 'Looks like you left this field empty.',
                            pattern: {
                                value: /^[a-zA-Z]{2,12}$/,
                                message: "Please enter a firstname between 2 and 12 characters containing only letters"
                            }
                        })}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                    {errors?.firstname && <ErrorMessage message={errors.firstname?.message} />}
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                    <input 
                        {...register('lastname', {
                            required: 'Looks like you left this field empty.',
                            pattern: {
                                value: /^[a-zA-Z]{2,12}$/,
                                message: "Please enter a lastname between 2 and 12 characters containing only letters"
                            }
                        })}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                    {errors?.lastname && <ErrorMessage message={errors.lastname?.message}/>}
                </div>
                <div>
                    <MySelect 
                        options={filteredPokemons}
                        value={filter}
                        onChange={handleSelectOption}
                        setFilter={setFilter}
                        selectedPokemons={selectedPokemons}
                        isSelectVisible={isSelectVisible}
                        setSelectVisible={setSelectVisible}
                        setModalVisible={setModalVisible}
                        setPopUpVisible={setPopUpVisible}
                        removePokemon={removePokemon}
                    />
                </div>
                <button
                    disabled={!isValid}
                    className={`text-white ${
                        isValid && selectedPokemons.length === 4
                        ? 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
                        : 'bg-blue-700 cursor-not-allowed'
                    } font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    >
                    Send
                </button>
            </form>
            <MyModal 
                title={`${getValues('firstname')} ${getValues('lastname')}'s team`}
                content={certainPokemons}
                onAccept={onAccept} 
                onDecline={onDecline} 
                isModalVisible={isModalVisible}
            ></MyModal>
            <MyPopUp 
                isPopUpVisible={isPopUpVisible}
                onAccept={onAcceptPopUp}
                onDecline={onDeclinePopUp}
                message='You can select only four pokemons'
            />
        </div>
    )
}

export default App
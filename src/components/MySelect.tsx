import {ISelectProps} from '../interfaces';
import SelectedOptions from './SelectedOptions';

const MySelect = ({options, value, onChange, setFilter, selectedPokemons, isSelectVisible, setSelectVisible, setModalVisible, setPopUpVisible, removePokemon}: ISelectProps) => {

    const selectOption = (option: string) => {
        if (selectedPokemons.length < 4){
            onChange(option);
        } else {
            setPopUpVisible(true);
        }
    }
    
    return (
        <>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Choose a Pokemon:</label>
            <div className='relative'>
                <div className="flex items-center mb-1 bg-gray-50 border border-gray-300 text-gray-900 capitalize-first text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5 mr-2 text-gray-400'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'/>
                    </svg>
                    <input
                        value={value}
                        placeholder='Choose your pickachu'
                        onChange={(e) => setFilter(e.target.value)}
                        className='bg-transparent outline-none flex-1'
                        onFocus={() => setSelectVisible(true)}
                    />
                </div>
                {isSelectVisible &&
                <ul className='absolute h-350 w-full overflow-y-auto scr' style={{'height': 205}}>
                    {options.map((option) => (
                        <li
                            key={option.url}
                            onClick={() => selectOption(option.name)}
                            className='bg-gray-50 border p-3 rounded-none hover:bg-gray-100  cursor-pointer capitalize-first text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        >
                            {option.name}
                        </li>
                    ))}
                </ul>}
            </div>
            <SelectedOptions selectedPokemons={selectedPokemons} removePokemon={removePokemon} />
        </>
    );
}

export default MySelect;
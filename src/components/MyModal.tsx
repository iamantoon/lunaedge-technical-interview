import {IModal} from './../interfaces';

const Modal = ({title, content, onAccept, onDecline, isModalVisible}: IModal) => {

    if (!isModalVisible) return null;

    return (
        <div className='fixed inset-0'>
            <div className='flex items-center justify-center h-full'>
                <div className='bg-black opacity-50 fixed inset-0' />
                <div className='relative p-4 w-full max-w-md'>
                    <div className='relative bg-white rounded-lg shadow'>
                        <div className='flex items-center justify-between p-4 border-b rounded-t'>
                            <h3 className='text-xl font-semibold text-gray-900'>{title}</h3>
                            <button type='button' className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center' onClick={onDecline}>
                                <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
                                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'/>
                                </svg>
                                <span className='sr-only'>Close modal</span>
                            </button>
                        </div>
                        <div className='p-2 space-y-2 flex flex-col justify-center items-center'>
                            {content.map((item, index) => (
                                <div key={index} className='flex items-center space-x-1'>
                                    <img src={item.sprites.front_default} alt={item.name} className='w-17 h-17' />
                                    <p className='text-gray-800 dark:text-white capitalize-first'>{item.name}</p>
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center p-4 border-t'>
                            <button
                                onClick={onAccept}
                                type='button'
                                className='text-white bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                            >
                                Accept
                            </button>
                            <button
                                onClick={onDecline}
                                type='button'
                                className='ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900'
                            >
                                Reshuffle the team
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Modal;
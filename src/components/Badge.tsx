import {IBadge} from '../interfaces';

const Badge = ({ value, onRemove }: IBadge) => {
    return (
        <div className='inline-block mr-1 mb-1 mt-1'>
            <div className='bg-yellow-100 text-yellow-500 p-1.5 rounded-lg flex items-center'>
                <span className='mr-2 capitalize-first'>{value}</span>
                <button onClick={onRemove} className='text-yellow-500'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-4 h-4'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Badge;
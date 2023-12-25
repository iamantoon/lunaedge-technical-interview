import {IBadge} from '../interfaces';

const Badge = ({ value, onRemove }: IBadge) => {
    return (
        <div className='inline-block mx-1 mb-1'>
            <div className='bg-getRandomColor-100 text-yellow-600 p-1.5 rounded-full flex items-center'>
                <span className='mr-2 capitalize-first'>{value}</span>
                <button onClick={onRemove} className='text-yellow-600'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-4 h-4'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M6 18 18 6M6 6l12 12' />
                </svg>
                </button>
            </div>
        </div>
    );
};

export default Badge;
import {IBadge} from '../interfaces';

const Badge = ({ value, onRemove }: IBadge) => {
    return (
        <div className="inline-block mx-2 mb-2">
            <div className="bg-red-100 text-red-600 p-2 rounded-full flex items-center">
                <span className="mr-2 capitalize-first">{value}</span>
                <button onClick={onRemove} className="text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
        </div>
    );
};

export default Badge;
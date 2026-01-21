import { JSX } from 'react';

const IconClockFilled = ({ className = 'w-5 h-5' }: { className?: string }): JSX.Element => {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.5"
        >
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4.707,10.293-4,4A1,1,0,0,1,11,15V8a1,1,0,0,1,2,0v5.586l3.293-3.293a1,1,0,1,1,1.414,1.414Z" />
        </svg>
    );
};

export default IconClockFilled;
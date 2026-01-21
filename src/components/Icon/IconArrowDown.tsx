import { JSX } from 'react';

const IconArrowDown = ({ className = 'w-5 h-5' }: { className?: string }): JSX.Element => {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
        </svg>
    );
};

export default IconArrowDown;
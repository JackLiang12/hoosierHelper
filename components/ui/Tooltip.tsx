import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div 
            onMouseEnter={() => setIsVisible(true)} 
            onMouseLeave={() => setIsVisible(false)} 
            className="relative flex items-center justify-center"
        >
            {children}
            {isVisible && (
                <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs font-kanit font-bold py-1 px-2 rounded-lg whitespace-nowrap">
                    {text}
                </div>
            )}
        </div>
    );
}

export default Tooltip;

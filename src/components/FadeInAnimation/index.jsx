import isInViewport from '../../util/isInViewport';
import { useRef, useState, useEffect } from 'react';
import './index.css';

export default function FadeInAnimation({ duration, direction, offset, children }) {
    const element = useRef(null);
    const [animationRunning, setAnimationRunning] = useState(false);
    const [animationRan, setAnimationRan] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (isInViewport({ element: element.current, offset: offset }) 
                && !animationRunning
                && !animationRan) {
                setAnimationRunning(true);
                setTimeout(() => {
                    setAnimationRan(true);
                }, duration);
            }
        });
    }, []);

    return (
        <div 
            ref={(e) => element.current = e}
            style={{ 
                animation: animationRunning ?
                !animationRan ? 
                    `fade-in-${direction} ${duration}ms ease-in-out`
                        : 'none'
                            : 'none' 
            }}
        >
            {children}
        </div>
    );
}

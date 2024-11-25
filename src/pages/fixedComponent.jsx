import React, { useState, useEffect } from 'react';
import {motion} from "framer-motion";
import {slideIn} from "../canvas/motion";
import {EarthCanvas} from "../canvas";

const FixedElement = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const elementStyle = {
        position: isFixed ? 'fixed' : 'static',
        top: 0,
        left: 0,
        width: '100%',
        // добавьте другие стили по вашему усмотрениючы
    };

    return (
        <div style={elementStyle}>
            <div className='brief_object'>
                <motion.div
                    variants={slideIn("left", "tween", 1, 5)}
                    className='main_canvas'
                >
                    <EarthCanvas />
                </motion.div>
            </div>
        </div>
    );
};

export default FixedElement;

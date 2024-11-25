import React, {useEffect, useRef, useState, Suspense} from "react";
import '../pages/main_page.scss'
import { motion } from "framer-motion";
import { EarthCanvas } from "../canvas";
import { slideIn } from "../canvas/motion";
import {Model} from "../canvas";
import {OrbitControls, Stage} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

const AnimatedComponent = () => {
    const elementRef = useRef(null);
    const [isLoad, setIsLoad] = useState(false)

    const styles = {
        height: isLoad ? '0vh' : '100vh'
    };

    useEffect(() => {
        // Получаем доступ к элементу, к которому нужно применить анимацию
        const element = elementRef.current;
        if (element) {
            element.classList.add('animated');

            const animationDuration = 3500; // примерная длительность анимации в миллисекундах
            setTimeout(() => {
                setIsLoad(true)
                element.classList.remove('animated');
            }, animationDuration);
        }
    }, []); // Пустой массив зависимости гарантирует, что этот эффект запустится только один раз

    return <div ref={elementRef} className="preloader_scene" style={styles}>
        <div className="preloader_block">
            <svg width="250" height="35" viewBox="0 0 97 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.82203 0H1.41637C0.634129 0 0 0.634129 0 1.41637V9.82203L8.38598 9.26563C8.8582 9.2343 9.2343 8.8582 9.26563 8.38598L9.82203 0ZM0 11.178V19.5836C0 20.3658 0.634129 21 1.41637 21H9.82203L9.26563 12.6141C9.2343 12.1418 8.8582 11.7657 8.38598 11.7344L0 11.178ZM11.178 21H19.5836C20.3658 21 21 20.3658 21 19.5836V11.178L12.6141 11.7344C12.1418 11.7657 11.7657 12.1418 11.7344 12.6141L11.178 21ZM21 9.82203V1.41637C21 0.634129 20.3658 0 19.5836 0H11.178L11.7344 8.38598C11.7657 8.8582 12.1418 9.2343 12.6141 9.26563L21 9.82203Z" fill="white"/>
                <path d="M45.1933 18.7005H41.3748L33.6898 4.8794V18.7005H31V2H34.8185L42.5035 15.7981V2H45.1933V18.7005Z" fill="white"/>
                <path d="M49.7317 12.5501C49.7317 15.5908 51.4848 16.9729 53.358 16.9729C55.2793 16.9729 57.0084 15.5677 57.0084 12.5501C57.0084 9.48645 55.2793 8.10434 53.358 8.10434C51.4848 8.10434 49.7317 9.41734 49.7317 12.5501ZM53.358 6.07723C56.432 6.07723 59.6501 8.05826 59.6501 12.5501C59.6501 17.019 56.432 19 53.358 19C50.308 19 47.0899 17.019 47.0899 12.5501C47.0899 8.05826 50.308 6.07723 53.358 6.07723Z" fill="white"/>
                <path d="M63.2677 12.5501C63.2677 15.5908 65.0208 16.9729 66.894 16.9729C68.8153 16.9729 70.5444 15.5677 70.5444 12.5501C70.5444 9.48645 68.8153 8.10434 66.894 8.10434C65.0208 8.10434 63.2677 9.41734 63.2677 12.5501ZM66.894 6.07723C69.968 6.07723 73.1861 8.05826 73.1861 12.5501C73.1861 17.019 69.968 19 66.894 19C63.844 19 60.6259 17.019 60.6259 12.5501C60.6259 8.05826 63.844 6.07723 66.894 6.07723Z" fill="white"/>
                <path d="M75.6851 6.30759L78.9512 15.4986L82.1933 6.30759H84.787L80.0079 18.7005H77.7264L72.9233 6.30759H75.6851Z" fill="white"/>
                <path d="M90.848 16.9499C92.6732 16.9499 93.6818 16.2358 94.2342 15.061H96.7558C96.1794 17.1111 94.2102 19 90.944 19C86.7893 19 84.5078 16.0745 84.5078 12.481C84.5078 8.63415 87.1976 6.07723 90.872 6.07723C94.8586 6.07723 97.1881 9.21003 96.9239 13.2412H87.0775C87.3417 15.5447 88.8066 16.9499 90.848 16.9499ZM90.848 8.03523C88.9027 8.03523 87.4858 8.97967 87.1255 11.3523H94.3302C94.2582 9.53252 92.8893 8.03523 90.848 8.03523Z" fill="white"/>
            </svg>
        </div>
    </div>
};

function Main () {
    const ref = useRef()
    return(
        <div>
            <AnimatedComponent/>
            <div className="main_page">
                <div className='main_page_text'>
                    <h1>Комплексно разрабатываем digital-сервисы, сайты, приложения для компаний завтрашнего дня</h1>
                    <p>Повышаем уровень компетенций внутри нашей команды и воплощаем все наши навыки в проектах.</p>
                </div>
                <div className='object'>
                    <Canvas camera={{ fov: 40 }}>
                        <Suspense fallback={null}>
                            <Stage controls={ref} preset="rembrandt" intensity={0}  environment="city">
                                false
                                <Model />
                                false
                            </Stage>
                        </Suspense>
                        <OrbitControls ref={ref} autoRotate enableZoom={false}/>
                    </Canvas>
                </div>
            </div>
        </div>
    )
}

export default Main
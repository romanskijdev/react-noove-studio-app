import React, {useRef, Suspense} from 'react'
import './brief.scss'
import {Link} from "react-router-dom";
import {slideIn} from "../canvas/motion";
import {EarthCanvas, Model} from "../canvas";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser"
import {OrbitControls, Stage} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

const categoryArray = ['Дизайн', 'Техническая поддержка', 'Дизайн поддержка', 'Backend-разработка', 'Frontend-разработка', 'Другое']
const budgetArray = ['Менее 200 тыс', '200 — 500 тыс', '500 тыс — 1 млн', 'Более 1 млн']
const socialArray = ['Dprofile', 'Telegram', 'Behance', 'Vkontakte', 'По рекомендации', 'Другое']

export default function Brief() {
    let regex = /[A-Za-zA-Яа-яЁё]/g
    let reg = /[0-9]/g

    const [category, setCategory] = React.useState('')
    const [money, setMoney] = React.useState(0)
    const [social, setSocial] = React.useState('')
    const [name, setName] = React.useState('')
    const [contact, setContact] = React.useState('')
    const [project, setProject] = React.useState('')
    const [site, setSite] = React.useState('')
    const [comment, setComment] = React.useState('')

    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();

        if(category.length <= 0 || money.length <= 0 || social.length <= 0 || name.length < 3 || contact.length <= 0 || project.length <= 0) {
            alert("Некоторые данные не заполнены или заполнены неверно. Пожалуйста, введите корректные данные перед отправкой.")
        }
        else {
            emailjs.send("service_kew7oom", "template_253c56m", {
                name: {name},
                contact: {contact},
                project_name: {project},
                site: {site},
                task: {category},
                budget: {money},
                social: {social},
                comment: {comment},
            }, '8pq1UK6fUKHOMJLqD').then(() => {
                alert({name})
            }, (error) => {
                alert(`Ошибка, ${error.text}. Обратитесь к представителям организации и мы обязательно решим эту проблему.`)
            });
        }
    }

    const [isFixed, setIsFixed] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                alert("true")
                setIsFixed(true);
            } else {
                alert("false")
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const elementStyle = {
        position: isFixed ? 'fixed' : 'static'
    };

    const ref = useRef();
    return(
        <div className='brief'>
            <div className='brief_text'>
                <h1>Напишите нам, а мы подготовим индивидуальное предложение</h1>
                <p>Готовим предложение в течении 2-х дней.</p>
            </div>
            <div className='brief_form'>
                <div className='brief_object'>
                    <Canvas shadows dpr={[1, 2]} camera={{ fov: 30 }}>
                        <Suspense fallback={null}>
                            <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
                                false
                                <Model />
                                false
                            </Stage>
                        </Suspense>
                        <OrbitControls ref={ref} autoRotate enableZoom={false}
                                       maxPolarAngle={Math.PI / 2}
                                       minPolarAngle={Math.PI / 2}/>
                    </Canvas>
                </div>
                <form ref={form} onSubmit={sendMail}>
                    <h3>Общая информация</h3>
                    <div>
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Ваше имя'/>
                        <input onChange={(e) => setContact(e.target.value)} value={contact} type="text" placeholder='Почта, телефон или мессенджер'/>
                        <input onChange={(e) => setProject(e.target.value)} value={project} type="text" placeholder='Название проекта'/>
                        <input onChange={(e) => setSite(e.target.value)} value={site} type="url" placeholder='Сайт компании (при наличии)'/>
                    </div>
                    <h3>Что вас интересует?</h3>
                    <div>
                        {categoryArray.map((cat) => (
                            <li
                                onClick={() => setCategory(cat)}
                                className={category === cat ? 'active' : ''}
                                key={cat}>
                                {cat}
                            </li>
                        ))}
                    </div>
                    <h3>Каков примерный бюджет проекта?</h3>
                    <div>
                        {budgetArray.map((mon) => (
                            <li
                                onClick={() => setMoney(mon)}
                                className={money === mon ? 'active' : ''}
                                key={mon}>
                                {mon}
                            </li>
                        ))}
                    </div>
                    <h3>Откуда вы о нас узнали?</h3>
                    <div>
                        {socialArray.map((soc) => (
                            <li
                                onClick={() => setSocial(soc)}
                                className={social === soc ? 'active' : ''}
                                key={soc}>
                                {soc}
                            </li>
                        ))}
                    </div>
                    <h3>Напишите всё то, что нам нужно знать о проекте</h3>
                    <div>
                        <input onChange={(e) => setComment(e.target.value)} value={comment} className='comment' type="text" placeholder='Комментарий' name='comment'/>
                        <input name="submitButton" type='submit' value='Отправить заявку' className="submitButton" onSubmit={(e) => {}}/>
                        <p>Нажимая на кнопку «Отправить заявку», вы соглашаетесь с <Link to='/privacy' className='privacyLink'>политикой конфиденциальности</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
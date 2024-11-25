import React from 'react'
import '../pages/footer.scss'

export default function Footer () {
    const [hover, setHover] = React.useState(false)
    const [copy, setCopy] = React.useState(false)
    const [mail, setMail] = React.useState('hello@noove.ru')

    /*
    React.useEffect(() => {
        if(navigator.clipboard.readText() != mail) {
            setCopy(false)
        }
    })
    */


    return(
        <div className='footer'>
            <div className='footer_first'>
                <div>
                    <a href="#" target='_blank' className='link'>Vkontakte</a>
                    <a href="#" target='_blank' className='link'>Telegram</a>
                </div>
                <div>
                    <a href="#" target='_blank' className='link'>Behance</a>
                    <a href="#" target='_blank' className='link'>Dprofile</a>
                    <a href='#' onMouseEnter={(e) => {
                        setHover(true)
                    }} onMouseLeave={(e) => {
                        setHover(false)
                    }} onClick={(e) => {
                        navigator.clipboard.writeText(mail).then(r => setCopy(true));
                    }} className='link'>
                        {
                            hover ? (
                                copy ? (
                                    <p className='mail'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.01758 1.48499C8.01758 4.48499 10.4551 6.92248 13.4551 6.92248V8.04749C10.4588 8.04749 8.01758 10.485 8.01758 13.485H6.89258C6.89258 10.485 4.45508 8.04749 1.45508 8.04749V6.92248C4.45508 6.92248 6.89258 4.48499 6.89258 1.48499H8.01758ZM4.10258 7.48498C5.59508 8.14499 6.79508 9.34499 7.45508 10.8375C8.11508 9.34499 9.31508 8.14499 10.8076 7.48498C9.31508 6.82499 8.11508 5.62499 7.45508 4.13249C6.79508 5.62499 5.59508 6.82499 4.10258 7.48498ZM12.9376 10.5H14.0626C14.0626 11.8425 15.1576 12.9375 16.5001 12.9375V14.0625C15.1576 14.0625 14.0626 15.1575 14.0626 16.5H12.9376C12.9376 15.1575 11.8426 14.0625 10.5001 14.0625V12.9375C11.8426 12.9375 12.9376 11.8425 12.9376 10.5ZM12.4126 13.5C12.8514 13.7812 13.2226 14.1525 13.5001 14.5875C13.7814 14.1487 14.1526 13.7775 14.5876 13.5C14.1489 13.2187 13.7776 12.8475 13.5001 12.4125C13.2189 12.8512 12.8476 13.2225 12.4126 13.5Z" fill="#171717" fill-opacity="0.65"/>
                                    </svg> Скопировано</p>
                                ) : (
                                    <p className='mail'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.4375 13.5H14.8125C15.33 13.5 15.75 13.08 15.75 12.5625V3.1875C15.75 2.67 15.33 2.25 14.8125 2.25H5.4375C4.92 2.25 4.5 2.67 4.5 3.1875V12.5625C4.5 13.08 4.92 13.5 5.4375 13.5ZM14.625 12.375H5.625V3.375H14.625V12.375ZM4.3125 15.75H13.5V14.625H4.3125C3.795 14.625 3.375 14.205 3.375 13.6875V4.5H2.25V13.6875C2.25 14.8237 3.17625 15.75 4.3125 15.75Z" fill="#171717" fill-opacity="0.65"/>
                                    </svg>  Скопировать</p>
                                )
                            ) : (
                                <p></p>
                            )
                        }
                        hello@noove.ru
                    </a>
                </div>
            </div>
            <div className='footer_second'>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8113 15.2854C11.5867 15.51 11.2933 15.62 11 15.62C10.7067 15.62 10.4133 15.51 10.1888 15.2854L5.93083 11.0275L6.9025 10.0558L10.3125 13.4658V2.75H11.6875V13.4658L15.0975 10.0558L16.0692 11.0275L11.8113 15.2854ZM17.875 16.7292V14.2083H19.25V16.7292C19.25 18.1179 18.1179 19.25 16.7292 19.25H5.27083C3.88208 19.25 2.75 18.1179 2.75 16.7292V14.2083H4.125V16.7292C4.125 17.3617 4.63833 17.875 5.27083 17.875H16.7292C17.3617 17.875 17.875 17.3617 17.875 16.7292Z" fill="#171717"/>
                </svg>

                <a href="#" target='_blank' className='link'>Смотреть презентацию</a>
            </div>
            <div className='footer_third'>
                <a href="#" className='selected'>RU</a>
                <a href="#">EN</a>
            </div>
        </div>
    )
}
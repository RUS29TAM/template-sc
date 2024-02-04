import React, {useEffect, useState} from 'react';
import style from "../Footer/Footer.module.css";
const Footer = () => {

    let pos = document.documentElement;
    pos.addEventListener("mousemove", ev => {
        pos.style.setProperty('--x', ev.clientX + 'px')
        pos.style.setProperty('--y', ev.clientY + 'px')
    })

    const [isScrolled, setIsScrolled] = useState(true);

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop < lastScrollTop);
            lastScrollTop = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
    return (
        <div className={style.wrapper}>
            <nav className={`${style.nav} ${isScrolled ? style.icon : ''}`}>
                <a href="##" id="navbar" className={style.brand}>
                    <span className={style.span}>
                        {/*<img className={style.logo} src={Logo} alt={'Logo'}/>*/}
                    </span>
                    <span className={style.span}>сделано бесплатно для клиентов АНО АО &laquo;Агентство регионального развития&raquo; 2024 &copy;RUS29TAM</span>
                </a>
            </nav>
        </div>
    );
};

export default Footer;
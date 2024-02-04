import React, {useEffect, useState} from 'react';
import style from './Navbvar.module.css';
import {MdOutlineBusinessCenter, MdOutlineLocalGroceryStore} from "react-icons/md";
import {TiContacts} from "react-icons/ti";
import Logo from '../../images/logo-mb.png';
import {BiSolidOffer} from "react-icons/bi";
import {GrServices} from "react-icons/gr";

const Navbar: React.FC = () => {
    const scrollStyle = {'--i': '0'} as React.CSSProperties;
    const scrollStyle2 = {'--i': '1'} as React.CSSProperties;
    const scrollStyle3 = {'--i': '2'} as React.CSSProperties;
    const scrollStyle4 = {'--i': '3'} as React.CSSProperties;
    const scrollStyle5 = {'--i': '4'} as React.CSSProperties;

    let pos = document.documentElement;
    pos.addEventListener("mousemove", ev => {
        pos.style.setProperty('--x', ev.clientX + 'px')
        pos.style.setProperty('--y', ev.clientY + 'px')
    })

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > lastScrollTop);
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
                <a href="##" id="navbar" className={style.brand}><span className={style.span}><img
                    className={style.logo} src={Logo} alt={'Logo'}/></span><span
                    className={style.span}>Отдел по работе с МО</span></a>
                <ul className={style.ul}>
                    <li style={scrollStyle} className={style.li}><a className={style.a} href='##' rel="noreferrer"><span
                        className={style.span}>Services</span><span className={style.span}><GrServices /></span></a></li>
                    <li style={scrollStyle2} className={style.li}><a className={style.a} href='##'
                                                                     rel="noreferrer"><span
                        className={style.span}>Business</span><span
                        className={style.span}><MdOutlineBusinessCenter/></span></a></li>
                    <li style={scrollStyle3} className={style.li}><a className={style.a} href='##'
                                                                     rel="noreferrer"><span
                        className={style.span}>Tariffs</span><span className={style.span}><BiSolidOffer/></span></a>
                    </li>
                    <li style={scrollStyle4} className={style.li}><a className={style.a} href='##'
                                                                     rel="noreferrer"><span
                        className={style.span}>Store</span><span
                        className={style.span}><MdOutlineLocalGroceryStore/></span></a></li>
                    <li style={scrollStyle5} className={style.li}><a className={style.a} href='##'
                                                                     rel="noreferrer"><span
                        className={style.span}>Contact</span><span className={style.span}><TiContacts/></span></a></li>
                    <div className={style.cursor}></div>
                </ul>
            </nav>
        </div>
    );
};
export default Navbar

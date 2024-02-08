import React from 'react';
import style from './page-hero-next.module.css';
import { Link } from "react-router-dom";
// import ScrollingAnimation from "../../components/scrolling-animation/scrolling-animation";

const PageHeroNext: React.FC = () => {
  const screenWidth = window.innerWidth;

    let pos = document.documentElement;
    pos.addEventListener("mousemove", ev => {
        pos.style.setProperty('--x', ev.clientX + 'px')
        pos.style.setProperty('--y', ev.clientY + 'px')
    })

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                    <ul className={style.ul}>
                        <li className={style.li}><Link className={style.a} to={'start_business'} data-text="Изучай"><img className={style.img} alt={'img_unsplash'} src={'https://lifemoneyblog.ru/wp-content/uploads/2022/03/franchiz2-scaled.jpg'}/>Франчайзинг</Link></li>
                        <li className={style.li}><Link className={style.a} to={'SContract'}  data-text="Договаривайся"><img className={style.img} alt={'img_unsplash'} src={'https://sbcargo.ru/images/eksport-v-oae-2.jpg'}/>Соц. контракт</Link></li>
                        <li className={style.li}><Link className={style.a} to={'BoxedSolutions-modal'} data-text="Действуй"><img className={style.img} alt={'img_unsplash'} src={'https://lsconsulting.ru/wp-content/uploads/2022/04/shutterstock_3471911.jpg'}/>Коробочные решения</Link></li>
                        <div className={style.cursor}></div>
                    </ul>
            </div>
        </div>
    );
};
export default PageHeroNext

import React from 'react';
import style from './step.module.css';
import { Alert, Card } from 'antd';
import { VideoCameraTwoTone } from "@ant-design/icons";
const Step2 = () => {
  return (
    <div className={style.wrapper}>
      <Card className={style.card} title={<h1 className={style.cardTitle}>Проверьте свои знания.</h1>}
        // extra={<a href="https://example.com">Еще</a>}
      >
        <p>Определите профессиональные и личностные черты, которые важно развить, чтобы достичь успеха в
          предпринимательстве. Заполнение пробелов в своем бизнес-образовании поможет усвоить навыки и компетенции,
          необходимые для разработки плана действий и снижения рисков при запуске собственного бизнеса.</p>
        <br/>
        <Alert showIcon={true} description={<><span className={style.span}>Офлайн</span><br/><p> Если вы предпочитаете дистанционное обучение, есть возможность зарегистрироваться на бесплатные курсы для
          новичков-предпринимателей, такие как «Азбуку предпринимательства» в центре «Мой бизнес г. Архангельск». Там
          можно освоить основы ведения бизнеса.</p></>} type="info"></Alert>
        <br/>
        <Alert showIcon={true} icon={<VideoCameraTwoTone />} description={<><span className={style.span}>Онлайн</span><br/><p>В личном кабинете на Цифровой платформе <a target="_blank" rel="noreferrer"
                                                                                                                      href='https://xn--l1agf.xn--p1ai/'>МСП.РФ</a> (после регистрации)
          предоставляется экспресс-проверка
          компетенций. Путем тестирования можно определить уровень профессиональных и личностных навыков, а затем
          получить индивидуальные рекомендации по их улучшению. Уникальной особенностью этого сервиса является
          возможность нахождения персонального наставника в интересующей области и моментальной записи на
          онлайн-встречу.</p></>} type="success"></Alert><br/>
        <p>Там же, перейдя по данной <a href="https://xn--l1agf.xn--p1ai/education/promo/" target="_blank"
                                        rel="noreferrer">ссылке</a>, предоставляется возможность бесплатного прохождения
          онлайн-обучения для приобретения нужных навыков.</p>
      </Card>
    </div>
  );
};

export default Step2;

import React from 'react';
import style from './step.module.css';
import { Card } from 'antd';

const Step9 = () => {
  return (
    <div className={style.wrapper}>
      <Card className={style.card}
        title={<h1 className={style.cardTitle}>Начните свой бизнес.</h1>}
        // extra={<a href="https://example.com">Еще</a>}
      >
        <p>Перед вами много работы: необходимо приобрести оборудование, инструменты и материалы, нанять сотрудников,
          установить стабильное производство качественной продукции, а также настроить каналы продаж и маркетинга.</p>
        <p>Чтобы сэкономить время и ресурсы, можно обратиться в центр "Мой бизнес" уже в новом качестве. Там
          предоставляются следующие услуги:</p>
        <ul>
          <li>Предоставление бесплатных профессиональных консультаций включает работу с юристами, бухгалтерами и
            маркетологами (последние помогают точно определить вашу целевую аудиторию, уникальное предложение, а также
            каналы продаж). Кроме того, в центрах есть HR-специалисты.
          </li>
          <li>Также предоставляется помощь в подаче заявки на регистрацию товарного знака, выводе продукции на
            маркетплейсы для расширения каналов сбыта, а также в разработке фирменного стиля, логотипа и создании сайта
            для вашей компании.
          </li>
          <li>Кроме этого, предлагаются профильные семинары, курсы и образовательные программы, на которых вы сможете
            развить свои предпринимательские навыки в области управления командой, обслуживания клиентов, маркетинга,
            продаж и других аспектов.
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Step9;

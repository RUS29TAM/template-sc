import React from 'react';
import style from './step.module.css';
import { Alert, Card } from 'antd';

const Step8 = () => {
  return (
    <div className={style.wrapper}>
      <Card className={style.card} title={<h1 className={style.cardTitle}>Оформите регистрацию вашего предприятия.</h1>}
        // extra={<a href="https://example.com">Еще</a>}
      >
        <p>Наступил важный момент для вас – время зарегистрировать свой бизнес.</p>
        <ol>
          <li>Если вы выбрали путь самозанятости, процесс максимально прост: загрузите приложение "Мой налог" и пройдите
            быструю регистрацию (доступно на iOS и Android).
          </li>
          <li>Если же вы решили создать индивидуальное предприятие (ИП) или общество с ограниченной ответственностью
            (ООО), вы можете подать заявление на регистрацию в центре "Мой бизнес", в МФЦ, в налоговой, у нотариуса или
            в банках.
          </li>
        </ol>
        <Alert showIcon={true}
               description={
                 <>
                   <span>Для открытия ИП вам потребуется:</span><br/>
                   <ul>
                     <li>Паспорт с пропиской</li>
                     <li>Идентификационный номер налогоплательщика (ИНН)</li>
                     <li>Предварительно выбранные виды деятельности (ОКВЭД)</li>
                   </ul>
                 </>
               }
               type="info"></Alert>
        <br/>
        <Alert showIcon={true}
               description={
                 <>
                   <span>Для регистрации ООО необходимо иметь при себе:</span><br/>
                   <ul>
                     <li>Паспорта всех учредителей</li>
                     <li>Документ, подтверждающий адрес (гарантийное письмо в случае аренды или свидетельство о праве собственности)</li>
                     <li>Типовой устав, который можно выбрать на <a href="https://service.nalog.ru/statute/" target="_blank" rel="noreferrer">сайте налоговой</a> службы</li>
                   </ul>
                 </>
               } type="success"></Alert><br/>
      </Card>
    </div>
  );
};

export default Step8;

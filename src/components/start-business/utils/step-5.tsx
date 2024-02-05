import React from 'react';
import style from './step.module.css';
import { Alert, Card } from 'antd';

const Step5 = () => {
  return (
    <div className={style.wrapper}>
      <Card className={style.card} title={<h1 className={style.cardTitle}>Определите, какие документы требуются для вашей выбранной сферы предпринимательской
        деятельности.</h1>}
        // extra={<a href="https://example.com">Еще</a>}
      >
        <Alert
               description={<p>Для некоторых видов бизнеса требуются специальные разрешения и документы, такие как
                 лицензии, сертификаты, декларации, патенты, медицинские удостоверения и другие. В большинстве случаев
                 они не нужны, но если ваш бизнес связан с работой с детьми, услугами общественного питания или
                 производством пищевых продуктов, стоит заранее ознакомиться с соответствующими нормами
                 законодательства.</p>} type="warning"></Alert>
      </Card>
    </div>
  );
};

export default Step5;

import React, { useState } from 'react';
import style from './start-business.module.css'
import { Button, Steps, theme  } from 'antd';
import Step1 from "./utils/step-1";
import Step2 from "./utils/step-2";
import Step3 from "./utils/step-3";
import Step4 from "./utils/step-4";
import Step5 from "./utils/step-5";
import Step6 from "./utils/step-6";
import Step7 from "./utils/step-7";
import Step8 from "./utils/step-8";
import Step9 from "./utils/step-9";
import Step10 from "./utils/step-10";




const steps = [
  {title: '', content: <Step1 />},
  {title: '', content: <Step2 />},
  {title: '', content: <Step3 />},
  {title: '', content: <Step4 />},
  {title: '', content: <Step5 />},
  {title: '', content: <Step6 />},
  {title: '', content: <Step7 />},
  {title: '', content: <Step8 />},
  {title: '', content: <Step9 />},
  {title: '', content: <Step10 />},
];

const StartBusiness: React.FC = () => {
  // const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    if (current) {
      setCurrent(current - 1);
    }
  };

  const items = steps.map((item: { title: any; }) => ({ key: item.title, title: item.title }));

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Как начать свое дело: 10 шагов для тех, кто только начинает свой путь в предпринимательстве.</h1>
      <Steps responsive={false} className={style.stepsItem} current={current} items={items} />
      <div className={style.contentStyle}>{steps[current].content}</div>
      <div className={style.btnWrapper}>
        {current === 0 && (
          <Button className={style.btn} disabled={true} onClick={() => prev()}>
            Назад
          </Button>
        )}
        {current > 0 && (
          <Button className={style.btn} onClick={() => prev()}>
            Назад
          </Button>
        )}
        {current < steps.length - 1 && (
        <Button type="primary" onClick={() => next()}>
          Вперед
        </Button>
      )}
        {current === steps.length - 1 && (
          <Button disabled={true} type="primary" onClick={() => next()}>
            Вперед
          </Button>
        )}
      </div>
    </div>
  );
};


export default StartBusiness;

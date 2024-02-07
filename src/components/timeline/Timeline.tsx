import React, {useEffect, useState} from 'react';
import style from './Timeline.module.css';

const Timeline: React.FC = () => {
    const [steps, setSteps] = useState<string[]>([]);

    useEffect(() => {
        console.log('Steps updated:', steps);
    }, [steps]);

    const handleAddStep = () => {
        const newStep = `Step ${steps.length + 1}`;
        setSteps([...steps, newStep]);
    };

    return (
        <div className={style.timelineContainer}>
            <button onClick={handleAddStep}>Add Step</button>
            <ul className={style.timeline}>
                {steps.map((step, index) => (
                    <li className={style.li} key={index}>{step}</li>
                ))}
            </ul>
        </div>
    );
};

export default Timeline;
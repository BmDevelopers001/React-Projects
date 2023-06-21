import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { dataType } from '../data';
import { useState } from 'react';

const Question : React.FC<dataType> = ({title,info}) => {
    const [showInfo, setShowInfo] = useState<boolean>(false);

    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button className='btn' onClick={() => {
                    setShowInfo(!showInfo);
                }}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    )
}

export default Question;
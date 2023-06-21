import {useState} from 'react';

import reviews, { reviewType } from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review : React.FC = () => {
    const [index,setIndex] = useState<number>(0);
    const {name,job,image,text} : reviewType = reviews[index];

    const nextPerson = () => {
        setIndex((i) => {
            if(i >= reviews.length - 1){
                return 0;
            }
            let newIndex = i + 1;
            return newIndex;
        })
    }

    const prevPerson = () => {
        setIndex((i) => {
            if(i == 0) {
                return reviews.length - 1;
            }
            let newIndex = i - 1;
            return newIndex;
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * reviews.length);
        
        setIndex(randomNumber)
    }


    return (
        <article className='review'>
            <div className="img-container">
                <img src={image} alt={name} className='person-img'/>
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
                <button className='random-btn' onClick={randomPerson}>
                    Surprise Me !!
                </button>
        </article>
    )
}

export default Review;
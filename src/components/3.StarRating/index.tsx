
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'

const StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState<number>(0);
    const [hover, setHover] = useState<number>(0);

    function handleClick(getCurrentIndex: number) {
        console.log(getCurrentIndex);
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex: number) {
        console.log(getCurrentIndex);
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
        // console.log(getCurrentIndex);
        setHover(rating)
    } 

    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_, index) => {
                index+=1
                return (
                    <FaStar
                        key={index}
                        className={ index <= (hover || rating)? 'active' :'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    /> 
                )
            })
      }
  </div>;
};

export default StarRating;
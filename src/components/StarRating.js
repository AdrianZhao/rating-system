import Message from "./Message";
import Star from "./Star";
import { useState } from "react";
function StarRating() {
  const [rating, setRating] = useState(0);
  return (
    <div className="wrapper">
      <div className="star-wrapper">
      {[...new Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <div key={currentRating} onClick={() => setRating(currentRating)}>
            <Star className={currentRating <= (rating) ? true : false} />
          </div>
        )
      })}
      </div>  
      <Message number={rating}/>
    </div>
  )
}

export default StarRating
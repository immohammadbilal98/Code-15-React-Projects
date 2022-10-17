import React from "react";
import { useState } from "react/cjs/react.development";

const ToursItem = ({ id, image, info, price, name, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  const RemoveToursHandler = () => {
    removeTours(id);
    console.log(id)
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less..." : "Read More..."}
          </button>
        </p>
        <button className="delete-btn" onClick={RemoveToursHandler}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default ToursItem;

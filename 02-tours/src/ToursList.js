import React from "react";
import ToursItem from "./ToursItem";

const ToursList = ({ tours, removeTours }) => {
  return (
    <section>
      <div className="title">
        <h3>OUR TOURS</h3>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <ToursItem key={tour.id} {...tour} removeTours={removeTours}></ToursItem>
          );
        })}
      </div>
    </section>
  );
};

export default ToursList;

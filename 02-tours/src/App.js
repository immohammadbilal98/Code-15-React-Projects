import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ToursList from "./ToursList";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true); //For Loading
  const [tours, setTours] = useState([]); //For Tours Item

  //Deleting item if you are not interested for tours
  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    console.log("RUNNING....")
    fetchtours();

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);


  const fetchtours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url); //API From Tour  Data
      // console.log(response);
      const tours = await response.json();
      // console.log(tours)
      setLoading(false);
      setTours(tours);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  if (loading)
    return (
      <main>
        <Loading />
      </main>
    );

  if (tours.length === 0)
    return (
      <main>
        <div>
          <h1 className="title">No Tours Left....</h1>
          <button className="btn" onClick={fetchtours}>
            Refresh
          </button>
        </div>
      </main>
    );

  return (
    <main>
      <ToursList tours={tours} removeTours={removeTours} />
    </main>
  );
}

export default App;

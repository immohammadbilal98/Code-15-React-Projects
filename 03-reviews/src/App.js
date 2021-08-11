import React from "react";
import Review from "./Review";
import { faGithubSquare } from "react-icons/fa";
function App() {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h1>Our Reviews</h1>
          <div className="underline"></div>
        </div>
        <Review />
      </div>
    </main>
  );
}

export default App;

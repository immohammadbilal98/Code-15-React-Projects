import React, { useState } from "react";
import DATA from './data';
import List from "./List";
function App() {
  const [people, setPeople] = useState(DATA);
  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthday Remainder</h3>
          <List people_list={people} />
          <button onClick={() => setPeople([])}>Clear</button>
        </section>
      </main>
    </>
  );
}

export default App;

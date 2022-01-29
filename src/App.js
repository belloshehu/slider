import React, { useState, useEffect } from "react";
import People from "./People";
import data from './data'
import Loading from "./Loading";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [data]);
  
  if(loading){
    return(
      <main>
         <Loading />
      </main>
    )
  }
  return (
    <>
      <header>
        <h1>Employees</h1>
      </header>
      <main>
        <People people={people} index={index} setIndex={setIndex} />
      </main>
    </>
  );
}

export default App;



import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);

function App() {
  const [counter, setCounter] = useState([0]);
  const handleClick = () => {
    const newCounter = [...counter];
    newCounter.push(0);
    setCounter(newCounter);
    console.log(newCounter);
  };
  return (
    <div className="App">
      <Header />
      <div className="middle">
        <button onClick={handleClick}>Add counter</button>
        {counter.map((item, index) => {
          return (
            <Counter
              counter={counter}
              setCounter={setCounter}
              value={item}
              index={index}
            />
          );
        })}

        <Footer />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);

function App() {
  const [counters, setCounters] = useState([0]);
  const handleClick = () => {
    const newCounters = [...counters];
    newCounters.push(0);
    setCounters(newCounters);
    console.log(newCounters);
  };
  return (
    <div className="App">
      <Header />
      <div className="middle">
        <button onClick={handleClick}>Add counter</button>
        <div className="counters">
          {counters.map((counter, index) => {
            return (
              index < 3 && (
                <div>
                  {
                    <Counter
                      counter={counter}
                      more={() => {
                        counter + 1;
                      }}
                      less={() => {
                        counter - 1;
                      }}
                      reset={() => {
                        counter - 1 * counter;
                      }}
                      index={index}
                    />
                  }
                </div>
              )
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

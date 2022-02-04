import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Array from "./components/Array";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    const newCounter = [...counter];
    setCounter(newCounter);
  };
  return (
    <div className="App">
      <Header />
      <div>
        <button onClick={handleClick}>Add counter</button>
        {tab.map((item, index) => {
          return <Counter add={(item, index)} />;
        })}
      </div>
      <Counter counter={counter} setCounter={setCounter} />
      <Footer />
    </div>
  );
}

export default App;

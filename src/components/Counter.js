const Counter = ({ counter, setCounter }) => {
  return (
    <div className="middle">
      <div className="counter">
        {counter > 0 && (
          <button onClick={() => setCounter(counter - 1)}>-</button>
        )}
        <p>{counter}</p>
        {counter < 10 && (
          <button onClick={() => setCounter(counter + 1)}>+</button>
        )}
      </div>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Counter;

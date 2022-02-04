const Counter = ({ counter, setCounter, value, index }) => {
  return (
    <div className="middle">
      <div className="counter">
        {value > 0 && (
          <button
            onClick={() => {
              setCounter(counter[index] - 1);
            }}
          >
            -
          </button>
        )}
        <p>{value}</p>
        {value < 10 && (
          <button
            onClick={() => {
              setCounter(counter[index] + 1);
            }}
          >
            +
          </button>
        )}
      </div>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Counter;

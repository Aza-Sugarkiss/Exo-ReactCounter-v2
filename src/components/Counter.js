const Counter = ({ counter, more, less, reset }) => {
  return (
    <div>
      <div className="counter-copies">
        {counter > 0 && (
          <button
            className="more-less"
            onClick={() => {
              more();
            }}
          >
            -
          </button>
        )}
        <p className="counter">{counter}</p>
        {counter < 10 && (
          <button
            className="counter-copies"
            onClick={() => {
              less();
            }}
          >
            +
          </button>
        )}
      </div>
      <button className="reset" onClick={reset()}>
        Reset
      </button>
    </div>
  );
};

export default Counter;

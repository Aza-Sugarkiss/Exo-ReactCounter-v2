const Array = () => {
  const less = () => {
    const newTab = [...props.tab];
    newTab[props.index] -= 1;
    props.setTab(newTab);
  };
  const more = () => {
    const newTab = [...props.tab];
    newTab[props.index] += 1;
    props.setTab(newTab);
  };
  return (
    <div className="counter">
      <button onClick={less}>-</button>
      <p className="number">{props.tab[props.index]}</p>
      <button onClick={more}>+</button>
    </div>
  );
};

export default Array;

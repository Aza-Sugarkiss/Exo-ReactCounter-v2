import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon
        className="icon"
        color="#5C48D3"
        icon="stopwatch"
        size="5x"
      />
      <p className="title">React Counter v2</p>
    </div>
  );
};

export default Header;

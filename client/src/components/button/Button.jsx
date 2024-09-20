import { Link } from "react-router-dom";

const Button = ({ name, to }) => {
  return <Link to={to}>{name}</Link>;
};

export default Button;

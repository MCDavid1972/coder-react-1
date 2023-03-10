import style from "./Navbar.module.css";
import logo from "../../images/Logo.png";
import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className={style.containerNavbar}>
      <Link to="/">
        <img src={logo} alt="" className={logo} />
      </Link>

      <ul className={style.containerList}>
        <li>Todo</li>
        <li>Didacticos</li>
        <li>Trofeos</li>
        <li>Hogar</li>
      </ul>
      <CardWidget />
    </div>
  );
};

export default Navbar;

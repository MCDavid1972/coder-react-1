import style from "./Navbar.module.css";
import logo from "../../images/Logo.png";
import CardWidget from "../CardWidget/CardWidget";

const Navbar = () => {
  return (
    <div className={style.containerNavbar}>
      <img src={logo} alt="" />
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

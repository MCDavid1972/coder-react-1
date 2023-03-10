import "./CardWidget.css";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom"


const CardWidget = () => {
  return (
    <Link to="cart" style={{textDecoration:"none"}}>
      <div className="icon">
        <HiShoppingCart />
        <div className="buble-count">
        <span >0</span>
        </div>
      </div>
    </Link>

  );
};

export default CardWidget;

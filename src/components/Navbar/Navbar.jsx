import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";



const Navbar = () => {

  const { setCurrency } = useContext(CoinContext);
  
  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }

      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }

      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }

      default: {
        setCurrency({ name: "usd", symbol: "$" });
      }
    }
  };
  return (
    <div className="navbar">
      <Link to={"/"}>
      <img className="logo" src={logo} alt="" />
      
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>

        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className="nav-right">
        <select onClick={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          sign up <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

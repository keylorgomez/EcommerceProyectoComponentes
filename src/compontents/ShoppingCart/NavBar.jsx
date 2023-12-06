import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/ShoppingCartContext";
import { ShoppingCart } from "@mui/icons-material";

export const NavBar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

 

  return (
    <nav>
      <ul className="nav-list">
        <Link >              
          <div style={{width:"8rem"}}>
            Carrito: <span className="cart-count">{quantity}</span>
          </div>
          
        </Link>
      </ul>
    </nav>
  );
};
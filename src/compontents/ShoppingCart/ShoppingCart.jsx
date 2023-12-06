import React, { useContext } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext";

export const ShoppingCart = () => {
    const [cart, setCart] = useContext(CartContext);
  
    const quantity = cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  
    const totalPrice = cart.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );
  
    return (
      <div className="cart-box">
        <div className="cart-container">
          <div>
            <div style={{fontWeight:"bold"}}>Resumen</div>
            <div>Cantidad de items: {quantity}</div>
            <div>Total: ${totalPrice}</div>
          </div>
        </div>

      </div>
        
    );
  };
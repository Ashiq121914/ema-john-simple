import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total += product.price * quantity;
    shipping += product.shipping * quantity;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = total + shipping + parseFloat(tax);
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Selected Items:{quantity}</p>
      <p>Total price:${total} </p>
      <p>Total Shipping:${shipping}</p>
      <p>Tax:{tax}</p>
      <h5>Grand Total:{grandTotal} </h5>
    </div>
  );
};

export default Cart;

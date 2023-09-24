import React, { useState } from "react";
import "./cart.css";
import prod from "../../Assets/Images/products.png";
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      img: prod,
      id: 1,
      name: "Wireless PS Handler",
      price: 124.0,
      quantity: 1,
    },
    {
      img: prod,
      id: 2,
      name: "Gradient Light Keyboard",
      price: 124.0,
      quantity: 1,
    },
    {
      img: prod,
      id: 3,
      name: "HD CC Camera",
      price: 124.0,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (event, item) => {
    // Update the quantity of the item in the cart state
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: event.target.value,
        };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (item) => {
    // Remove the item from the cart state
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart">
      <div className="seprate"></div>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.img} alt="product" />
              </td>
              <td>{item.name}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(event) => handleQuantityChange(event, item)}
                />
              </td>
              <td>{item.price}</td>
              <td>{item.quantity * item.price}</td>
              <td>
                <button onClick={() => handleRemoveItem(item)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-actions">
        <button>Update Cart</button>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

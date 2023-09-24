import React, { useState } from "react";
import "./cart.css";
import store from "../../StoreAPI";

const Cart = () => {
  const [cartItems, setCartItems] = useState(store.getState().cartItems);

  const handleQuantityChange = (event, item) => {
    // Update the quantity of the item in the cart state
    if (event.target.value > item.quantity) {
      store.dispatch({ type: "INCREASE_QUANTITY", payload: { id: item.id } });
    } else if (event.target.value < item.quantity) {
      store.dispatch({ type: "DECREASE_QUANTITY", payload: { id: item.id } });
    }
    setCartItems(store.getState().cartItems);
  };

  const handleRemoveItem = (item) => {
    // Remove the item from the cart state
    store.dispatch({ type: "REMOVE_FROM_CART", payload: { id: item.id } });
    setCartItems(store.getState().cartItems);
  };

  // Calculate the final total of all items in the cart
  const total = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart">
      <table className="table">
        <thead>
          <tr>
            <th></th>
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
                <img src={item.images[0]} alt="product" />
              </td>
              <td>{item.title}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  min={1} // Prevent negative number input
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
        <p> Total: {total}</p>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

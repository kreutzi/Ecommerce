import axios from "axios";
import { createStore } from "redux";

// Define the initial state of the store
const initialState = {
  products: [],
  cartItems: [],
};

// Define the reducer function to update the store
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_TO_CART":
      // Check if the item already exists in the cart
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // If the item already exists, increase its quantity by 1
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If the item doesn't exist, add it to the cart with a quantity of 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: newCartItems,
      };
    case "INCREASE_QUANTITY":
      const increasedCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        cartItems: increasedCartItems,
      };
    case "DECREASE_QUANTITY":
      const decreasedCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...state,
        cartItems: decreasedCartItems,
      };
    default:
      return state;
  }
}

// Create the store
const store = createStore(reducer);

// Fetch the data and update the store
axios
  .get("https://api.escuelajs.co/api/v1/products")
  .then((response) => {
    store.dispatch({ type: "SET_PRODUCTS", payload: response.data });
  })
  .catch((error) => {
    console.log(error);
  });

export default store;

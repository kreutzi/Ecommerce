import "./card.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import prod from "../../Assets/Images/products.png";
import { useState } from "react";

function CardComponent({ item, cartItems, setCartItems }) {
  const handleAddToCart = () => {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (itemIndex === -1) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="card-comp container-fluid">
      <Card style={{ width: "18rem", border: 0 }} className="text-center">
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Button variant="primary" className="bt" onClick={handleAddToCart}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function CardList({ cartItems, setCartItems }) {
  return (
    <div className="container-fuild d-flex flex-row">
      {cartItems.map((item) => (
        <CardComponent
          key={item.id}
          item={item}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}

export default CardList;

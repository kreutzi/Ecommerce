import "./card.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function card() {
  return (
    <div className="card-comp container-fluid">
      <Card style={{ width: "18rem", border: 0 }} className="text-center">
        <Card.Img
          variant="top"
          src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-02.png"
        />
        <Card.Body>
          <Card.Title>RGB Cherry</Card.Title>
          <Button variant="primary" className="bt">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default card;

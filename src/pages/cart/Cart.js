import "./cart.css";
import products from "../../Assets/Images/products.png";

// function increaseValue() {
//   var value = parseInt(document.getElementById("number").value, 10);
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById("number").value = value;
// }

// function decreaseValue() {
//   var value = parseInt(document.getElementById("number").value, 10);
//   value = isNaN(value) ? 0 : value;
//   value < 1 ? (value = 1) : "";
//   value--;
//   document.getElementById("number").value = value;
// }
function Cart() {
  return (
    <div className="cart">
      <div className="seprate"></div>
      <div className="header_of_the_shop">
        <div className="title_shop">
          <h1>Your Cart</h1>
        </div>
        <div className="clear_shop">
          <a href="#">Clear Shoping Cart</a>
        </div>
      </div>
      <table class="table axil-product-table axil-cart-table mb--40">
        <thead>
          <tr>
            <th scope="col" class="product-remove"></th>
            <th scope="col" class="product-thumbnail">
              Product
            </th>
            <th scope="col" class="product-title"></th>
            <th scope="col" class="product-price">
              Price
            </th>
            <th scope="col" class="product-quantity">
              Quantity
            </th>
            <th scope="col" class="product-subtotal">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="product-remove">
              <a href="#" class="remove-wishlist">
                <i class="fal fa-times"></i>
              </a>
            </td>
            <td class="product-thumbnail">
              <a href="single-product.html">
                <img src={products} alt="Digital Product" />
              </a>
            </td>
            <td class="product-title">
              <a href="single-product.html">Wireless PS Handler</a>
            </td>
            <td class="product-price" data-title="Price">
              <span class="currency-symbol">$</span>124.00
            </td>
            <td class="product-quantity" data-title="Qty">
              <div class="pro-qty">
                <span
                  class="dec qtybtn"
                  id="decrease"
                  // onclick={decreaseValue}
                  // value={value}
                >
                  -
                </span>
                <input
                  type="text"
                  id="number"
                  class="quantity-input"
                  value="1"
                />
                <span
                  class="inc qtybtn"
                  id="increase"
                  // onclick={increaseValue}
                  // value={value}
                >
                  +
                </span>
              </div>
            </td>
            <td class="product-subtotal" data-title="Subtotal">
              <span class="currency-symbol">$</span>275.00
            </td>
          </tr>
          <tr>
            <td class="product-remove">
              <a href="#" class="remove-wishlist">
                <i class="fal fa-times"></i>
              </a>
            </td>
            <td class="product-thumbnail">
              <a href="single-product-2.html">
                <img src={products} alt="Digital Product" />
              </a>
            </td>
            <td class="product-title">
              <a href="single-product-2.html">Gradient Light Keyboard</a>
            </td>
            <td class="product-price" data-title="Price">
              <span class="currency-symbol">$</span>124.00
            </td>
            <td class="product-quantity" data-title="Qty">
              <div class="pro-qty">
                <span
                  class="dec qtybtn"
                  id="decrease"
                  // onclick={decreaseValue}
                  // value={value}
                >
                  -
                </span>
                <input
                  type="number"
                  id="number"
                  class="quantity-input"
                  value="1"
                />
                <span
                  class="inc qtybtn"
                  id="increase"
                  // onclick={increaseValue}
                  // value={value}
                >
                  +
                </span>
              </div>
            </td>
            <td class="product-subtotal" data-title="Subtotal">
              <span class="currency-symbol">$</span>275.00
            </td>
          </tr>
          <tr>
            <td class="product-remove">
              <a href="#" class="remove-wishlist">
                <i class="fal fa-times"></i>
              </a>
            </td>
            <td class="product-thumbnail">
              <a href="single-product-3.html">
                <img src={products} alt="Digital Product" />
              </a>
            </td>
            <td class="product-title">
              <a href="single-product-3.html">HD CC Camera</a>
            </td>
            <td class="product-price" data-title="Price">
              <span class="currency-symbol">$</span>124.00
            </td>
            <td class="product-quantity" data-title="Qty">
              <div class="pro-qty">
                <span
                  class="dec qtybtn"
                  id="decrease"
                  // onclick={decreaseValue}
                  // value={value}
                >
                  -
                </span>
                <input
                  type="number"
                  id="number"
                  class="quantity-input"
                  value="1"
                />
                <span
                  class="inc qtybtn"
                  id="increase"
                  // onclick={increaseValue}
                  // value={value}
                >
                  +
                </span>
              </div>
            </td>
            <td class="product-subtotal" data-title="Subtotal">
              <span class="currency-symbol">$</span>275.00
            </td>
          </tr>
        </tbody>
      </table>
      <div class="cart-update-btn-area">
        <div class="input-group product-cupon">
          <input placeholder="Enter coupon code" type="text" />
          <div class="product-cupon-btn">
            <button type="submit" class="axil-btn btn-outline">
              Apply
            </button>
          </div>
        </div>
        <div class="update-btn">
          <a href="#" class="axil-btn btn-outline">
            Update Cart
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-5 col-lg-7 offset-xl-7 offset-lg-5">
          <div class="axil-order-summery mt--80">
            <h5 class="title mb--20">Order Summary</h5>
            <div class="summery-table-wrap">
              <table class="table summery-table mb--30">
                <tbody>
                  <tr class="order-subtotal">
                    <td>Subtotal</td>
                    <td>$117.00</td>
                  </tr>
                  <tr class="order-shipping">
                    <td>Shipping</td>
                    <td>
                      <div class="input-group">
                        <input
                          type="radio"
                          id="radio1"
                          name="shipping"
                          checked=""
                        />
                        <label for="radio1">Free Shippping</label>
                      </div>
                      <div class="input-group">
                        <input type="radio" id="radio2" name="shipping" />
                        <label for="radio2">Local: $35.00</label>
                      </div>
                      <div class="input-group">
                        <input type="radio" id="radio3" name="shipping" />
                        <label for="radio3">Flat rate: $12.00</label>
                      </div>
                    </td>
                  </tr>
                  <tr class="order-tax">
                    <td>State Tax</td>
                    <td>$8.00</td>
                  </tr>
                  <tr class="order-total">
                    <td>Total</td>
                    <td class="order-total-amount">$125.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              href="checkout.html"
              class="axil-btn btn-bg-primary checkout-btn"
            >
              Process to Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

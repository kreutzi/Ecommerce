function carousel() {
  const img1 = require("./product-38.png");
  const img2 = require("./product-39.png");
  return (
    <div className="container">
      <swiper-container
        className="col"
        navigation="false"
        pagination="true"
        scrollbar="false"
      >
        <swiper-slide>
          <img src={img1} className="img-fluid" alt="product" />
        </swiper-slide>
        <swiper-slide>
          <img src={img2} className="img-fluid" alt="product" />
        </swiper-slide>
        ...
      </swiper-container>
    </div>
  );
}

export default carousel;

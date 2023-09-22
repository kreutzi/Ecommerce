function carousel() {
  const img1 = require("./product-38.png");
  const img2 = require("./product-39.png");
  return (
    <div class="container">
      <swiper-container
        className="col"
        navigation="true"
        pagination="true"
        scrollbar="true"
      >
        <swiper-slide>
          <img src={img1} alt="product" />
        </swiper-slide>
        <swiper-slide>
          <img src={img2} alt="product" />
        </swiper-slide>
        ...
      </swiper-container>
    </div>
  );
}

export default carousel;

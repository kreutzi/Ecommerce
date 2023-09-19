function carousel() {
  const img1 = require("./product-38.png");
  const img2 = require("./product-39.png");
  return (
    <>
      <swiper-container navigation="true" pagination="true" scrollbar="true">
        <swiper-slide>
          <img src={img1} alt="product" />
        </swiper-slide>
        <swiper-slide>
          <img src={img2} alt="product" />
        </swiper-slide>
        ...
      </swiper-container>
    </>
  );
}

export default carousel;

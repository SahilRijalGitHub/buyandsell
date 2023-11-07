import "../styles/PromotionalCarousel.css";
function PromotionCarousel() {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt674314efe488e9a4/64b13f0acc7487ee6e3bea1c/fc24.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://m.media-amazon.com/images/S/pv-target-images/e20b8b48f1b00f5bf10420bda8ed8c7eb97d7f9c26e1e1cce8b0fe00bc713308.jpg"
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://images5.alphacoders.com/111/1111275.jpg"
            className="d-block w-100"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default PromotionCarousel;

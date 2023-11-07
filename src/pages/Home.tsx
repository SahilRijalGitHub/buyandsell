import Boxes from "../components/Boxes";
import PromotionCarousel from "../components/PromotionCarousel";
function Home() {
  return (
    <>
      <div className="container" id="promotion-carousel-container">
        <PromotionCarousel></PromotionCarousel>
      </div>
      <div className="container" id="boxes-container">
        <Boxes></Boxes>
      </div>
    </>
  );
}
export default Home;

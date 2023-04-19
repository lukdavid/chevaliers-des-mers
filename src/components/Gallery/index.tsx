import Carousel from "./Carousel";
import { CAROUSEL_IMAGES } from "../../utils/carouselImages";
import { ANCHORS } from "../../utils/anchors";

const Gallery = () => (
  <div className="relative h-screen bg-[#020024] py-48" id={ANCHORS.gallery}>
    <div className="m-auto max-w-4xl">
      <Carousel images={CAROUSEL_IMAGES} />
    </div>
  </div>
);

export default Gallery;

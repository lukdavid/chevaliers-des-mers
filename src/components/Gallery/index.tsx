/* eslint-disable tailwindcss/no-custom-classname */
import Carousel from "./Carousel";
import { CAROUSEL_IMAGES } from "../../utils/carouselImages";
import { ANCHORS } from "../../utils/anchors";

const Gallery = () => (
  <div className="relative h-screen bg-[#020024] py-48" id={ANCHORS.gallery}>
    <div className="m-auto  max-w-4xl">
      <h1 className=" text-blue-500  text-2xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl">
        Gallerie
      </h1>
      <p className="text-blue-300 mb-4">Quelques photos de nos plongées…</p>
    </div>
    <div className="m-auto max-w-4xl">
      <Carousel images={CAROUSEL_IMAGES} />
    </div>
  </div>
);

export default Gallery;

import type { FC, ComponentPropsWithoutRef } from "react";

export type CarouselImageProps = ComponentPropsWithoutRef<"img">;

const CarouselImage: FC<CarouselImageProps> = (imageProps) => (
  <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
    <img
      {...imageProps}
      className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
    />
  </div>
);

export default CarouselImage;

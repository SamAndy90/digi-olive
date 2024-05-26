"use client";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

import IMG1 from "./static/gallery/img1.jpg";
import IMG2_2 from "./static/gallery/img2-2.jpg";
import IMG2_3 from "./static/gallery/img2-3.jpg";
import IMG2_4 from "./static/gallery/img2-4.jpg";
import IMG2 from "./static/gallery/img2.jpg";
import IMG3 from "./static/gallery/img3.jpg";
import IMG4 from "./static/gallery/img4.jpg";

const upperImages = [IMG1, IMG2, IMG3, IMG4];
const lowerImages = [IMG2_2, IMG2_3, IMG2_4];

export function Gallery() {
  const [sliderUpper] = useKeenSlider({
    loop: true,
    initial: 0,
    slides: {
      perView: 1,
      spacing: 8,
      origin: "center",
    },

    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 12,
          origin: "center",
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 16,
          origin: "center",
        },
      },
    },
  });

  const [sliderLower] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 8,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 12,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
    },
  });

  return (
    <section className={"min-h-screen pb-40"}>
      <div ref={sliderUpper} className={"keen-slider mb-2 md:mb-3 lg:mb-4"}>
        {upperImages.map((img, Idx) => (
          <div key={Idx} className={"keen-slider__slide"}>
            <Image src={img} alt={"Staff image"} />
          </div>
        ))}
      </div>
      <div ref={sliderLower} className={"keen-slider"}>
        {lowerImages.map((img, Idx) => (
          <div key={Idx} className={"keen-slider__slide"}>
            <Image src={img} alt={"Staff image"} />
          </div>
        ))}
      </div>
    </section>
  );
}

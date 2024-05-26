"use client";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { cn } from "utils/cn";

import { Container } from "common/Container";
import { Title } from "common/Title";

import StaffIMG3 from "./static/staff/staff-ceo.jpg";
import StaffIMG2 from "./static/staff/staff-gm1.jpg";
import StaffIMG1 from "./static/staff/staff-gm.jpg";
import StaffIMG5 from "./static/staff/staff-photographer.jpg";
import StaffIMG4 from "./static/staff/staff-smm.jpg";

const staff = [
  { image: StaffIMG1, role: "General Manager", fullName: "Lorem ipsum" },
  { image: StaffIMG2, role: "CEO", fullName: "Lorem ipsum" },
  { image: StaffIMG3, role: "Social Media manager", fullName: "Lorem ipsum" },
  { image: StaffIMG4, role: "Photographer", fullName: "Lorem ipsum" },
  { image: StaffIMG5, role: "General Manager", fullName: "Lorem ipsum" },
];

export type SliderProps = {
  title: string;
  titleClasses?: string;
};

export function Slider({ title, titleClasses }: SliderProps) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    initial: 1,
    slides: {
      perView: 2,
      spacing: 12,
      origin: "center",
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 3.2,
          spacing: 16,
          origin: "center",
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3.8,
          spacing: 24,
          origin: "center",
        },
      },
    },
  });
  return (
    <section
      className={"min-h-screen pb-16 pt-12 text-do_black-900 md:pb-20 md:pt-14"}
    >
      <Container>
        <Title
          className={cn(
            "mb-16 max-w-[882px] text-6xl sm:text-7xl md:text-8xl lg:text-9xl",
            titleClasses,
          )}
        >
          {title}
        </Title>
      </Container>
      <div ref={sliderRef} className={"keen-slider"}>
        {staff.map((person, Idx) => (
          <div key={Idx} className={"keen-slider__slide"}>
            <Image
              src={person.image}
              alt={"Staff image"}
              className={"mb-2 rounded-lg"}
            />
            <div>
              <h3 className={"mb-1 font-medium"}>{person.fullName}</h3>
              <p className={"text-[#475467]"}>{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";

import { Title } from "common/Title";

import BG from "./static/hero-bg.jpg";
import MainTitle from "./static/main-title.svg";

export function Hero() {
  return (
    <section
      className={
        "relative flex min-h-screen items-center justify-center bg-black/45"
      }
    >
      <Image
        src={BG}
        alt={"Background"}
        fill
        className={"-z-10 select-none object-cover"}
        aria-hidden
      />
      <Title className={"z-10 max-w-[430px] md:max-w-[582px]"}>
        <Image src={MainTitle} alt={"Main title"} className={"w-full"} />
      </Title>
      <div
        className={
          "absolute inset-x-0 bottom-0 z-0 h-[14.4%] bg-do_body-500/25"
        }
      ></div>
    </section>
  );
}

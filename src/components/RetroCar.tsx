import Image from "next/image";

import { Container } from "common/Container";

import Car from "./static/retro-car.jpg";

export type RetroCarProps = {
  text: string;
  client: string;
};

export function RetroCar({ client, text }: RetroCarProps) {
  return (
    <section className={"relative"}>
      <Container>
        <div className={"relative min-h-screen"}>
          <div className={"absolute bottom-[43px] left-0 text-white"}>
            <p className={"mb-8 max-w-[677px] font-inconsolata"}>{text}</p>
            <h4 className={"text-4xl font-medium"}>{client}</h4>
          </div>
        </div>
      </Container>
      <Image
        src={Car}
        alt={"Car"}
        fill
        className={"-z-10 select-none object-cover object-top"}
        aria-hidden
      />
    </section>
  );
}

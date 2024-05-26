import Image from "next/image";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

import { Container } from "common/Container";
import { Title } from "common/Title";
import DocIcon from "components/static/icons/doc-icon.svg";
import RocketIcon from "components/static/icons/rocket.svg";
import ScanIcon from "components/static/icons/scan-icon.svg";

export function DarkBlock() {
  return (
    <section
      className={"relative min-h-screen bg-do_black-950 py-10 text-white"}
    >
      <Container>
        <Title
          className={
            "white relative z-10 mb-24 max-w-[520px] break-words font-sfpro text-6xl tracking-widest text-do_body-500 sm:text-7xl md:max-w-[752px] md:text-8xl lg:text-9xl"
          }
        >
          Unlocking Potential through Partnership
        </Title>
        <div className={"grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3"}>
          <div className={"flex flex-col gap-y-4"}>
            <Image src={RocketIcon} alt={"Icon"} />
            <Title className={"text-xl font-medium md:text-xl"}>
              Server-less Hosting
            </Title>
            <p className={"font-inconsolata text-[#DCDCDC]"}>
              Lorem ipsum dolor sit amet consectetur. Quam ut dictum commodo
              nullam feugiat. Dui at lorem proin massa sed.
            </p>
          </div>
          <div className={"flex flex-col gap-y-4"}>
            <Image src={DocIcon} alt={"Icon"} />
            <Title className={"text-xl font-medium md:text-xl"}>
              Data First Solutions
            </Title>
            <p className={"font-inconsolata text-[#DCDCDC]"}>
              Lorem ipsum dolor sit amet consectetur. In sagittis mus justo leo
              ultricies egestas accumsan nulla. Phasellus.
            </p>
          </div>
          <div className={"flex flex-col gap-y-4"}>
            <Image src={ScanIcon} alt={"Icon"} />
            <Title className={"text-xl font-medium md:text-xl"}>
              A.I. Implementation
            </Title>
            <p className={"font-inconsolata text-[#DCDCDC]"}>
              Lorem ipsum dolor sit amet consectetur. Blandit leo eget nec
              scelerisque eu viverra. Viverra eget odio sit nisl eu.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

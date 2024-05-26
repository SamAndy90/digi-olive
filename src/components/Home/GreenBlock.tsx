import { Container } from "common/Container";
import { Title } from "common/Title";

export function GreenBlock() {
  return (
    <section
      className={
        "relative flex min-h-screen items-center justify-center bg-do_green-500 py-8 text-white"
      }
    >
      <Container>
        <Title
          className={
            "relative z-10 text-center font-sfpro text-6xl tracking-widest sm:text-7xl md:text-8xl lg:text-9xl"
          }
        >
          We work with people who create human brands.
        </Title>
      </Container>
      <span
        className={
          "absolute left-[20%] top-[10%] z-0 hidden -rotate-[18deg] select-none rounded-lg bg-black p-2 font-inconsolata uppercase md:block"
        }
      >
        E-COMMERCE
      </span>
      <span
        className={
          "absolute right-[29%] top-[12%] z-0 hidden rotate-[25deg] select-none rounded-lg bg-black p-2 font-inconsolata uppercase md:block"
        }
      >
        PORTALS
      </span>
      <span
        className={
          "absolute bottom-[12%] right-[18%] z-0 hidden -rotate-[25deg] select-none rounded-lg bg-black p-2 font-inconsolata uppercase md:block"
        }
      >
        DATA & A.I.
      </span>
      <span
        className={
          "absolute bottom-[17%] left-[13%] z-0 hidden select-none rounded-lg bg-black p-2 font-inconsolata uppercase md:block"
        }
      >
        SOCIAL NETWORKS
      </span>
    </section>
  );
}

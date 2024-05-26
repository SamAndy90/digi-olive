import { Title } from "common/Title";

export function HostingHero() {
  return (
    <section
      className={
        "relative flex min-h-screen items-center justify-center bg-do_red-500"
      }
    >
      <Title
        className={
          "text-center font-hiragino text-7xl tracking-tight text-do_body-500 sm:text-8xl"
        }
      >
        <div className={"leading-none"}>Olive</div>
        <div className={"leading-none"}>Hosting</div>
      </Title>
      <div
        className={"absolute inset-x-0 bottom-0 z-0 h-[14.4%] bg-do_body-500"}
      ></div>
    </section>
  );
}

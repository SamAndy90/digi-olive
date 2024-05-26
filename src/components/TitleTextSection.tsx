import Link from "next/link";
import { cn } from "utils/cn";

import { Container } from "common/Container";
import { Title } from "common/Title";

export type TitleTextSectionProps = {
  title: string;
  text: string;
  link?: {
    label: string;
    href: string;
  };
  titleClasses?: string;
};

export function TitleTextSection({
  text,
  title,
  link,
  titleClasses,
}: TitleTextSectionProps) {
  return (
    <section>
      <Container>
        <div
          className={
            "flex min-h-[80vh] flex-col justify-between gap-x-12 gap-y-16 pb-12 pt-24 sm:flex-row"
          }
        >
          <Title
            className={cn(
              "font-karla text-6xl font-extrabold !leading-[0.9] text-do_green-500 sm:text-7xl md:max-w-[55%] md:text-7xl lg:text-9xl",
              titleClasses,
            )}
          >
            {title}
          </Title>
          <div className={"w-full max-w-[364px] font-inconsolata"}>
            <p className={"mb-11"}>{text}</p>
            {link && (
              <Link
                className={
                  "text-do_red-400 font-black underline underline-offset-2 transition-colors hover:text-do_red-500"
                }
                href={link.href}
              >
                {link.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

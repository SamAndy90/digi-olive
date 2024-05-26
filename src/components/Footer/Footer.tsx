"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MainUrl } from "route-urls";
import { cn } from "utils/cn";

import { Container } from "common/Container";

import Logo from "./static/footer-logo.svg";

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className={"bg-do_black-950 text-white"}>
      <Container>
        <div className={"flex min-h-screen flex-col justify-end"}>
          <div
            className={
              "flex flex-1 flex-col justify-between gap-x-8 gap-y-10 pb-16 pt-24 md:flex-row md:pb-24 md:pt-40"
            }
          >
            <p className={"max-w-[510px] font-inconsolata"}>
              Dive into a community buzzing with energy, collaboration, and
              endless opportunities.
              <br />
              <br />
              Lets Chat!
            </p>
            <nav className={"flex shrink-0 basis-[40%] gap-x-4 text-xs"}>
              <ul className={"flex-1 space-y-3 whitespace-nowrap"}>
                <li className={"uppercase"}>Partners</li>
                <li>Digi Olive A.I.</li>
                <li>The Omega Agency</li>
                <li>Hosting</li>
              </ul>
              <ul className={"flex-1 space-y-3"}>
                <li className={"uppercase"}>LINKS</li>
                <li>
                  <Link
                    href={MainUrl.getHome()}
                    className={cn("transition-colors hover:text-do_body-500", {
                      "text-do_body-500": pathname === MainUrl.getHome(),
                    })}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={MainUrl.getStudio()}
                    className={cn("transition-colors hover:text-do_body-500", {
                      "text-do_body-500": pathname === MainUrl.getStudio(),
                    })}
                  >
                    Studio
                  </Link>
                </li>
                <li>
                  <Link
                    href={MainUrl.getHosting()}
                    className={cn("transition-colors hover:text-do_body-500", {
                      "text-do_body-500": pathname === MainUrl.getHosting(),
                    })}
                  >
                    Hosting
                  </Link>
                </li>
              </ul>
              <ul className={"flex-1 space-y-3"}>
                <li className={"uppercase"}>IMPORTANT</li>
                <li>
                  <Link
                    href={MainUrl.getPortal()}
                    className={cn("transition-colors hover:text-do_body-500", {
                      "text-do_body-500": pathname === MainUrl.getPortal(),
                    })}
                  >
                    Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href={MainUrl.getPrivacy()}
                    className={cn("transition-colors hover:text-do_body-500", {
                      "text-do_body-500": pathname === MainUrl.getPrivacy(),
                    })}
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href={MainUrl.getFBO()}
                    className={cn("transition-colors hover:text-do_body-500", {
                      "text-do_body-500": pathname === MainUrl.getFBO(),
                    })}
                  >
                    FBO
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={"border-y border-gray-400 py-10 md:py-16"}>
            <Image src={Logo} alt={"Logo"} className={"w-full"} />
          </div>
          <div
            className={
              "flex flex-col items-center justify-between gap-x-3 gap-y-4 pb-10 pt-6 text-sm sm:flex-row md:pb-16 md:pt-8 md:text-base"
            }
          >
            <nav className={"flex items-center gap-x-10"}>
              <Link
                className={"transition-colors hover:text-do_body-500"}
                href={MainUrl.getTerms()}
              >
                Terms
              </Link>
              <Link
                className={"transition-colors hover:text-do_body-500"}
                href={MainUrl.getPrivacy()}
              >
                Privacy
              </Link>
            </nav>
            <p className={"flex items-center gap-x-3"}>
              <span className={"text-xl md:text-2xl"}>&copy;</span> 2023 Digital
              Olive All rights reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

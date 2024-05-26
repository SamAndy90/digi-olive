"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MainUrl } from "route-urls";
import { cn } from "utils/cn";

import { Container } from "common/Container";

import Logo from "./static/logo.svg";

const links: { label: string; href: string }[] = [
  { label: "Home", href: MainUrl.getHome() },
  { label: "Studio", href: MainUrl.getStudio() },
  { label: "Hosting", href: MainUrl.getHosting() },
  { label: "Data & A.I.", href: MainUrl.getDataAI() },
];

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.overflow = menuIsOpen ? "hidden" : "";
  }, [menuIsOpen]);

  return (
    <header className={"fixed inset-x-0 top-3 z-50 w-full"}>
      <Container>
        <div className={"flex items-center justify-between gap-x-8 py-3"}>
          <Link href={MainUrl.getHome()}>
            <Image src={Logo} alt={"Logo"} />
          </Link>
          <nav
            className={"hidden gap-x-[60px] font-helvetica text-white md:flex"}
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-do_body-500",
                  {
                    "text-do_body-500": pathname === link.href,
                  },
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setMenuIsOpen(true)}
            title={"Open burger menu"}
            className={
              "text-white transition-colors hover:text-do_body-500 md:hidden"
            }
          >
            <FiMenu className={"size-7"} />
          </button>
          <BurgerMenu open={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
        </div>
      </Container>
    </header>
  );
}

export const BurgerMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const pathname = usePathname();
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter={"ease-out transition"}
          enterFrom={"opacity-0"}
          enterTo={"opacity-100"}
          leave={"ease-in transition"}
          leaveFrom={"opacity-100"}
          leaveTo={"opacity-0"}
        >
          <div
            className={"fixed inset-0 z-[90] bg-do_black-950/50"}
            aria-hidden
          />
        </TransitionChild>

        <TransitionChild
          as={Fragment}
          enter={"ease-out transition transform duration-500"}
          enterFrom={"translate-x-full"}
          enterTo={"translate-x-0"}
          leave={"ease-in transition transform"}
          leaveFrom={"opacity-100 translate-x-0"}
          leaveTo={"opacity-0 translate-x-full"}
        >
          <DialogPanel
            className={cn(
              "fixed right-0 top-0 z-[100] h-full max-h-full min-w-60 max-w-full overflow-y-auto overflow-x-hidden bg-white",
            )}
          >
            <div
              className={
                "relative flex flex-col overflow-hidden px-4 pb-8 pt-14"
              }
            >
              <button
                className={"absolute right-4 top-5 outline-none"}
                onClick={onClose}
              >
                <FiX
                  className={
                    "size-6 transition-colors duration-300 hover:text-do_body-500"
                  }
                />
              </button>

              <nav
                className={
                  "flex flex-col gap-y-4 text-center font-helvetica text-2xl"
                }
              >
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "rounded-md py-2 font-medium transition-colors hover:bg-do_body-500 hover:text-white",
                      {
                        "bg-do_body-500 text-white": pathname === link.href,
                      },
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};

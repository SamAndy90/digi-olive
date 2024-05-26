"use client";

import {
  Disclosure as BaseDisclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { HTMLAttributes } from "react";
import { GoArrowDownRight } from "react-icons/go";
import { cn } from "utils/cn";

import { Container } from "./Container";

export type DisclosureProps = {
  children: React.ReactNode;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function Disclosure({ children, className }: DisclosureProps) {
  return (
    <div
      className={cn(
        "divide-y-[1px] divide-white border-y border-white",
        className,
      )}
    >
      {children}
    </div>
  );
}

export type DisclosureItemProps = {
  trigger: React.ReactNode;
  endIcon?: React.ReactElement;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: {
    triggerWrapper?: string;
    panelWrapper?: string;
  };
};

export function DisclosureItem({
  children,
  trigger,
  endIcon,
  className,
  onClick,
}: DisclosureItemProps) {
  return (
    <BaseDisclosure>
      <DisclosureButton
        onClick={onClick}
        className={cn("block w-full text-left", className?.triggerWrapper)}
      >
        <div
          className={
            "container mx-auto flex max-w-[1280px] items-center justify-between gap-x-2 px-3 py-5 transition-all hover:text-do_body-500 md:px-10"
          }
        >
          {trigger}
          {endIcon ? (
            endIcon
          ) : (
            <GoArrowDownRight className={"size-6 shrink-0"} />
          )}
        </div>
      </DisclosureButton>
      {children && (
        <Transition
          enter={"transition duration-150 ease-out"}
          enterFrom={"opacity-0"}
          enterTo={"opacity-100"}
          leave={"transition duration-150 ease-out"}
          leaveFrom={"opacity-100"}
          leaveTo={"opacity-0"}
        >
          <DisclosurePanel
            className={cn("py-5 text-base", className?.panelWrapper)}
          >
            <Container>{children}</Container>
          </DisclosurePanel>
        </Transition>
      )}
    </BaseDisclosure>
  );
}

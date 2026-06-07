import type { ReactNode, ComponentProps } from "react";

import type { ButtonVariantType } from "@/types/button-variatnt.type";

import clsx from "clsx";

import styles from "./button.module.css";

type Props = ComponentProps<"button"> & {
  variant?: ButtonVariantType;
};

export default function ButtonComponent({
  variant = "solid",
  className,
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(className, styles.button, styles[variant])}
      {...otherProps}
    >
      {children}
    </button>
  );
}

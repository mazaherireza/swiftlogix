import type { ReactNode, PropsWithChildren } from "react";

import type { ButtonVariantType } from "@/types/button-variatnt.type";

import clsx from "clsx";

import styles from "./button.module.css";

type Props = PropsWithChildren & {
  variant?: ButtonVariantType;
};

export default function ButtonComponent({
  variant = "solid",
  children,
}: Props): ReactNode {
  return (
    <button className={clsx(styles.button, styles[variant])}>{children}</button>
  );
}

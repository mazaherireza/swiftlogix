import { type ReactNode } from "react";

import { formatter } from "@/utils/format";

import clsx from "clsx";

import styles from "./statistics-item.module.css";

type Props = {
  value: number;
  suffix?: string;
  description: string;
};

export default function StatisticsItem({
  value,
  suffix,
  description,
}: Props): ReactNode {
  return (
    <div className={styles["statistics-item"]}>
      <div className={clsx(styles.value, "text-gradient")}>
        {formatter.format(value)}
        {suffix && suffix}
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

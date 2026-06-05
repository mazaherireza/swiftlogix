import type { ReactNode } from "react";

import styles from "./service-card.module.css";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceCardComponent({
  icon,
  title,
  description,
}: Props): ReactNode {
  return (
    <div className={styles["service-card"]}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

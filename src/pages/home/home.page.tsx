import { type ReactNode } from "react";

import HeroComponent from "@/components/hero/hero.component";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  return (
    <div className={styles.home}>
      <HeroComponent />
    </div>
  );
}

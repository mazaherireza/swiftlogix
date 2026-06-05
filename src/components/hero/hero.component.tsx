import type { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";

import hero from "@/assets/images/hero.svg";

import styles from "./hero.module.css";

export default function HeroComponent(): ReactNode {
  return (
    <div className={styles.hero}>
      <div className={styles.background}>
        <img src={hero} alt="" />
        <div className={styles.overlay}></div>
      </div>
      <h1>Effortless Logistics, Every Step of The Way</h1>
      <p>
        Manage your shipments, track in real-time, and get the best rates, all
        from one platform
      </p>
      <div className={styles.actions}>
        <ButtonComponent>Get a Free Quote</ButtonComponent>
        <ButtonComponent>Learn More</ButtonComponent>
      </div>
    </div>
  );
}

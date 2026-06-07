import type { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";

import containerTruck from "@/assets/images/container-truck.svg";
import doubleQuotes from "@/assets/images/double-quotes.svg";

import styles from "./testimonial.module.css";

export default function TestimonialComponent(): ReactNode {
  return (
    <div className={styles.testimonial}>
      <div className={styles.void}></div>
      <div className={styles.background}></div>
      <div className={styles.review}>
        <div className={styles.title}>
          Your Fleet's Safety, Our Top Priority
        </div>
        <p>
          Regular safety checks and maintenance are part of our commitment to
          keeping your fleet in top condition. Our app schedules and tracks
          inspections, ensuring that every vehicle meets stringent safety
          standards
        </p>
        <img className={styles["double-quotes"]} src={doubleQuotes} alt="" />
      </div>
      <img className={styles["container-truck"]} src={containerTruck} alt="" />
      <ButtonComponent className={styles.button}>
        Get a Free Quote
      </ButtonComponent>
    </div>
  );
}

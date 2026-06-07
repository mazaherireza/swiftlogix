import { type ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";

import reefer from "@/assets/images/reefer-truck.svg";

import styles from "./call-to-action.module.css";

export default function CallToActionComponent(): ReactNode {
  return (
    <div className={styles["call-to-action"]}>
      <div className={styles.writings}>
        <div className={styles.title}>Ready to Revolutionize Your Logistics Operations?</div>
        <p>
          Join countless other businesses that have streamlined their logistics
          with our cutting-edge solutions
        </p>
        <ButtonComponent>Get On Swiftlogix Today!</ButtonComponent>
      </div>
      <div className={styles.image}>
        <img src={reefer} alt="" />
      </div>
    </div>
  );
}

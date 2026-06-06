import { type ReactNode } from "react";

import HeroComponent from "@/components/hero/hero.component";
import ServicesComponent from "@/components/services/services.component";
import TestimonialComponent from "@/components/testimonial/testimonial.component";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  return (
    <div className={styles.home}>
      <HeroComponent />
      <ServicesComponent />
      <TestimonialComponent />
    </div>
  );
}

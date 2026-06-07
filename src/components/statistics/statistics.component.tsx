import type { ReactNode } from "react";

import StatisticsItem from "./components/statistics-item.comonent";

import styles from "./statistics.module.css";

export default function StatisticsComponent(): ReactNode {
  return (
    <ul className={styles.statistics}>
      <li>
        <StatisticsItem
          value={10000}
          suffix="+"
          description="Deliveries Managed"
        />
      </li>
      <li>
        <StatisticsItem value={25000} suffix="+" description="Active Clients" />
      </li>
      <li>
        <StatisticsItem
          value={98}
          suffix="%"
          description="On-Time Delivery Rat"
        />
      </li>
      <li>
        <StatisticsItem value={200} suffix="+" description="Industry Awards" />
      </li>
    </ul>
  );
}

import type { ReactNode } from "react";

import ServiceCardComponent from "./components/service-card/service-card.component";

import TimeIcon from "@/components/icons/time/time.icon";
import RouteIcon from "@/components/icons/route/route.icon";
import ReportIcon from "@/components/icons/report/report.icon";

import styles from "./services.module.css";

export default function ServicesComponent(): ReactNode {
  return (
    <div className={styles.services}>
      <h2>
        Three Main <span className="text-gradient">Services</span>
      </h2>
      <p>
        Our app gives you unparalleled visibility into your entire logistics
        network. Whether you're managing a single delivery or overseeing
        thousands, you can track the exact location of every shipment in real
        time.
      </p>
      <div className={styles.cards}>
        <ServiceCardComponent
          icon={<TimeIcon />}
          title="Track Every Shipment in Real Time"
          description="Stay updated on your cargo's exact location with instant tracking notifications"
        />
        <ServiceCardComponent
          icon={<RouteIcon />}
          title="Automate Route Optimization"
          description="Cut costs and time by letting our AI-driven system optimize delivery routes"
        />
        <ServiceCardComponent
          icon={<ReportIcon />}
          title="Detailed Analytics and Reporting"
          description="Make data-driven decisions with comprehensive logistics reports at your fingertips"
        />
      </div>
    </div>
  );
}

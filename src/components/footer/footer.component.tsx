import { type ReactNode } from "react";

import { Link } from "react-router";

import facebook from "@/assets/images/facebook.svg";
import youtube from "@/assets/images/youtube.svg";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactNode {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.headline}>
          <div className={styles.logo}>Swiftlogix</div>
          <div className={styles.more}>
            We're here to support you every step of the way
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.title}>Support</div>
          <ul>
            <li>
              <Link to="#">Getting Started</Link>
            </li>
            <li>
              <Link to="#">FAQS</Link>
            </li>
            <li>
              <Link to="#">Help Articles</Link>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <div className={styles.title}>Legal</div>
          <ul>
            <li>
              <Link to="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <div className={styles.title}>Services</div>
          <ul>
            <li>
              <Link to="#">Shipment Tracking</Link>
            </li>
            <li>
              <Link to="#">Route Optimization</Link>
            </li>
            <li>
              <Link to="#">Inventory Management</Link>
            </li>
            <li>
              <Link to="#">Freight Management</Link>
            </li>
            <li>
              <Link to="#">Real-Time Analytics</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.divider}></div>

      <div className={styles.extra}>
        <div className={styles.socials}>
          <Link to="#">
            <img src={facebook} alt="" />
          </Link>
          <Link to="#">
            <img src={youtube} alt="" />
          </Link>
        </div>
        <div className={styles.copyright}>
          Swiftlogix {year} &copy; All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

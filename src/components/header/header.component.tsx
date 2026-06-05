import { type ReactNode } from "react";

import logo from "@/assets/logos/Logo.svg";

import { NavLink } from "react-router";

import ButtonComponent from "@/components/button/button.component";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactNode {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Swiftlogix Logo" />
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/track-shipment"
            >
              Track Shipment
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/about-us"
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <ButtonComponent>Log In</ButtonComponent>
        <ButtonComponent variant="outline">Sign Up</ButtonComponent>
      </div>
    </header>
  );
}

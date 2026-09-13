import { type ReactNode, type MouseEvent, useState, useEffect } from "react";

import logo from "@/assets/logos/Logo.svg";

import { NavLink } from "react-router";

import ButtonComponent from "@/components/button/button.component";

import hamburgerIcon from "@/assets/images/hamburger-icon.svg";
import closeIcon from "@/assets/images/close.svg";

import clsx from "clsx";

import IconButtonComponent from "@/components/icon-button/icon-button.component";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactNode {
  const [isNavClosed, setIsNavClosed] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandler = (): void => {
      setIsNavClosed(true);
    };

    window.removeEventListener("scroll", scrollHandler);
    window.addEventListener("scroll", scrollHandler);

    return (): void => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const iconButtonClickHandler = (): void => {
    setIsNavClosed((prev) => !prev);
  };

  const backdropClickHandler = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.currentTarget.closest("header")) {
      return;
    }

    setIsNavClosed(true);
  };

  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="Swiftlogix Logo" />
        <nav className={clsx(isNavClosed && styles.closed)}>
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
        <IconButtonComponent
          className={styles.icons}
          onClick={iconButtonClickHandler}
        >
          {isNavClosed ? (
            <img
              className={styles["hamburger-icon"]}
              src={hamburgerIcon}
              alt=""
            />
          ) : (
            <img className={styles["close-icon"]} src={closeIcon} alt="" />
          )}
        </IconButtonComponent>
      </header>
      <div
        className={clsx(styles.backdrop, isNavClosed && styles.hidden)}
        onClick={backdropClickHandler}
      ></div>
    </>
  );
}

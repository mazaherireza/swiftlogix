import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router";

import Routing from "./routing.tsx";

import "./index.css";
import "./styles/animations.css";
import "./styles/colors.css";
import "./styles/globals.css";
import "./styles/shadows.css";
import "./styles/shapes.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </StrictMode>,
);

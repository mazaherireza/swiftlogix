import type { ReactNode } from "react";

import { Routes, Route } from "react-router";

import RootLayout from "@/layouts/root/root.layout";

import HomePage from "@/pages/home/home.page";

export default function Routing(): ReactNode {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

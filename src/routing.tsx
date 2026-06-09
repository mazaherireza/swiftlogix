import type { ReactNode } from "react";

import { Routes, Route } from "react-router";

import RootLayout from "@/layouts/root/root.layout";

import HomePage from "@/pages/home/home.page";
import NotFoundPage from "@/pages/not-found/not-found.page";

export default function Routing(): ReactNode {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

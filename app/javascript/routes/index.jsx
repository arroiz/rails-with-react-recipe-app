import React from "react";
import { BrowserRouter, Routes as ReactRouterRoutes, Route } from "react-router-dom";
import { Home } from "../components";

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<Home />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
}  
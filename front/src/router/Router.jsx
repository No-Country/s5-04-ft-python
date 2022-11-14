import React from "react";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default Router;

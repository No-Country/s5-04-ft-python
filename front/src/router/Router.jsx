import React from "react";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../auth/Login";

const Router = () => {
  return (
      <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
      </Routes>
  )
};

export default Router;

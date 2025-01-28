import React from "react";
import { Outlet } from "react-router-dom";
import HomeHeaders from "../components/Homepages/HomeHeaders";
import HomeFooter from "../components/Homepages/HomeFooter";

export default function HomeLayout() {
  return (
    <div>
      <HomeHeaders />
      <Outlet />
      <HomeFooter />
    </div>
  );
}

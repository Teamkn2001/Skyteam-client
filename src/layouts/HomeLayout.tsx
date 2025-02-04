import { Outlet } from "react-router-dom";
import HomeHeaders from "../components/Homepages/HomeHeaders";
import HomeFooter from "../components/Homepages/HomeFooter";
import ScrollTop from "../utils/ScrollToTop";

export default function HomeLayout() {
  return (
    <div>
      <HomeHeaders />
      <ScrollTop />
      <Outlet />
      <HomeFooter />
    </div>
  );
}

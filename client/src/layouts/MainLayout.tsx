import { Outlet } from "react-router-dom";

// components
import { Header, Footer } from "../components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;

import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="bg-black">
        <Outlet />
        <Footer/>
      </main>
    </>
  );
}

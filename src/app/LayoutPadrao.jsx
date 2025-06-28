// components/LayoutPadrao.jsx
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import { Outlet } from "react-router-dom";

function LayoutPadrao() {
  console.log('adas');
  return (
    <>
      <Header />
      <main className="flex flex-grow container mx-auto p-4 mt-[100px]">
        <Outlet />
      </main>
      <Footer />
    </> 
  );
}

export default LayoutPadrao;

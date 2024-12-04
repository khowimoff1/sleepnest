import React, { useEffect } from "react";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
  return (
    <div>
      <ScrollToTop />
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;

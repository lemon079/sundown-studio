import { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import HomePage from "./pages/HomePage.jsx";
import Studio from "./pages/Studio.jsx";
import Work from "./pages/Work.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.2,
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      <main ref={scrollRef} data-scroll-container>
        <div className="bg-customWhite relative z-[100] min-w-[290px] mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

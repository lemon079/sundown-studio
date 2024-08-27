import React from 'react';
import './App.css';
import Loading from './Components/GeneralComponents/Loading.jsx';
import Navbar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx';
import HomePage from './Components/HomePage.jsx';
import Contact from './Components/Contact.jsx';
import Studio from './Components/Studio.jsx';
import Work from './Components/Work.jsx';
import { Route, Routes } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll({
    smooth: true
  });

  return (
    <>
      <main>
        <div className='bg-customWhite relative z-[100] min-w-[290px] mx-auto'>
          <Loading />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        {/* Footer container */}
        <footer className='h-[85vh] md:h-screen bg-black'>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default App;

import React, { Suspense, lazy, } from 'react';
import './App.css';
import Loading from './Components/GeneralComponents/Loading.jsx';
import Navbar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';

// Lazy load your components
const HomePage = lazy(() => import('./Components/HomePage.jsx'));
const Contact = lazy(() => import('./Components/Contact.jsx'));
const Studio = lazy(() => import('./Components/Studio.jsx'));
const Work = lazy(() => import('./Components/Work.jsx'));

function App() {

  const locomotiveScroll = new LocomotiveScroll({
    smooth: true,
  });

  return (
    <>
      <main>
        <div className='bg-customWhite relative z-[100] min-w-[290px] mx-auto'>
          <Loading />
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<Work />} />
              <Route path="/studio" element={<Studio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
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

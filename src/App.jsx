import './App.css'
import Loading from './Components/GeneralComponents/Loading.jsx'
import Navbar from './Components/NavBar.jsx'
import Footer from './Components/Footer.jsx'
import HomePage from './Components/HomePage.jsx'
import Contact from './Components/Contact.jsx'
import Studio from './Components/Studio.jsx'
import Work from './Components/Work.jsx'
import { Route, Routes } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll';


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Loading />
      <main>
        <div className='bg-customWhite relative z-[100] min-w-[290px] mx-auto'>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        {/*if you give h-screen to the .footer-container(div element) you wont get the desired height for parallax because the height must need to be set to the most parent element */}
        <footer className='h-[85vh] md:h-screen bg-black'>
          <Footer />
        </footer>
      </main >


    </>
  )
}

export default App

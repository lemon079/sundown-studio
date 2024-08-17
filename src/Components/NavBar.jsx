import React, { useState } from 'react';
import '../index.css';
import { HiBars2 } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navItems = [
        { text: 'work', path: '/work' },
        { text: 'studio', path: '/studio' },
        { text: 'contact', path: '/contact' },
    ];

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(prev => !prev);

    return (
        <header className='relative z-[10]'>
            <section className="header-container relative bg-customWhite pt-6 px-5 sm:px-8 flex justify-between items-center">
                <figure className={`transition-opacity duration-[0.1s] ${isNavOpen ? 'opacity-0' : 'opacity-100'}`}>
                    <Link to="/" aria-label="Homepage">
                        <img src='/images/website-logo.svg' alt="Website Logo" />
                    </Link>
                </figure>
                <ul className="navigation-bar hidden sm:flex gap-3 capitalize font-light">
                    {navItems.map(({ text, path }) => (
                        <li key={text} className='link-tag-parent-animate border-[1px] rounded-full after:rounded-full after:top-[100%] hover:after:top-[0%] after:bg-black'>
                            <Link
                                to={path}
                                className="link-tag-animate block px-6 pt-1 pb-3 hover:text-white"
                                aria-label={text}
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className="open-nav-btn text-xl px-4 py-2 border-[1px] font-light border-customGray/40 rounded-full flex gap-3 items-center sm:hidden " onClick={toggleNav} aria-label='toggle navigation'><HiBars2 />Menu</button>
                {/* the navigation dropdown below is behind the navigation bar. how? because the topest parent (header tag) has z-index more than the navigation drop-down created below, thats why it is behind the navigation  */}
                <ul className={`navigation-dropdown text-6xl uppercase pt-10 space-y-2 text-right bg-customWhite p-5 border-b-[1px] rounded-b-3xl absolute z-[-1] w-full top-0 left-0 transition-all ease-in-out duration-[0.3s] ${isNavOpen ? 'top-[100%]' : 'top-[-300%]'}`}>
                    {navItems.map(({ text, path }) => (
                        <li key={text}>
                            <Link
                                to={path}
                                aria-label={text}
                                onClick={() => setIsNavOpen(false)}
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </header>
    );
};

export default NavBar;

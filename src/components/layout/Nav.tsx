import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinkStyles = ({ isActive }: { isActive: boolean }) => `navcap ${isActive ? 'font-bold text-(--accent)' : ''}`;
    
    return (
        <nav className="relative text-[var(--body1)] bg-white px-4 border-b border-(--divider)">
            <div className="flex items-center justify-between h-[82px] text-[var(--body1)]">
            <NavLink to="/" className="header-d">
                <span className='hidden md:inline'>Our Blooms®</span>
                <span className='md:hidden'>O.B.</span>
            </NavLink>
            <ul className="hidden md:flex gap-[40px]">
                <li><NavLink to="/Gallery" className={navLinkStyles}>Gallery</NavLink></li>
                <li><NavLink to="/About" className={navLinkStyles}>About</NavLink></li>
                <li><NavLink to="/Contact" className={navLinkStyles}>Contact</NavLink></li>
            </ul>

            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
        {isOpen && (
                <ul className="absolute top-[82px] left-0 w-full bg-white border-b flex flex-col items-start gap-[40px] py-[81px] pb-[50px] px-4 md:hidden z-50">
                    <li><NavLink to="/Gallery" className={navLinkStyles}>Gallery</NavLink></li>
                    <li><NavLink to="/About" className={navLinkStyles}>About</NavLink></li>
                    <li><NavLink to="/Contact" className={navLinkStyles}>Contact</NavLink></li>
                </ul>
            )}
        </nav>
        
        
    )
}

export default Nav

import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from "../context";
import React from 'react';

const Navbar: React.FC = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
    const displaySubmenu = (e : React.MouseEvent <HTMLElement, MouseEvent>) => {
        const page: string = (e.target as HTMLElement).textContent || "";
        const tempBtn = (e.target as HTMLElement).getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right)/2;
        const bottom = tempBtn.bottom - 3;

        openSubmenu(page,{center,bottom});
    }

    const handleSubmenu = (e : React.MouseEvent <HTMLElement, MouseEvent>) => {
        const targetElement = e.target as HTMLElement;
        if(!targetElement.contains('link-btn')){
            closeSubmenu();
        }
    }

    return (
        <nav className='nav' onMouseOver={handleSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="YodaPlus" className='nav-logo' />
                    <button className='btn toggle-btn' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            products
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            company
                        </button>
                    </li>
                </ul>
                <button className='btn signin-btn'>
                    Sign in
                </button>
            </div>
        </nav>
    )
}

export default Navbar;
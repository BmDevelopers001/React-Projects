import { useState,useRef, useEffect } from 'react';
import logo from '../logo.svg';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { linkType, links, social, socialType } from '../data';

const Navbar : React.FC = () => {
    const [showLinks,setShowLinks] = useState<boolean>(false);
    const linksContainerRef = useRef<HTMLInputElement | null>(null);
    const linksRef = useRef<null>(HTMLInputElement | null);

    useEffect(() => {
        const linksHeight = linksRef.current!.getBoundingClientRect().height;

        if(showLinks){
            linksContainerRef.current!.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current!.style.height = '0px';
        }
    },[showLinks])

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo"/>
                    <button 
                    className='nav-toggle'
                    onClick={() => setShowLinks(!showLinks)}
                    >
                        <FaBars/>
                    </button>
                </div>
                {
                    <div className='links-container' ref={linksContainerRef}>
                            <ul className="links" ref={linksRef}>
                                {
                                    links.map((link: linkType) => {
                                        const { id, url, text } = link;
                                        return (
                                            <li key={id}>
                                                <a href={url}>{text}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                }
                <ul className="social-icons">
                        {
                            social.map((socialIcon :socialType) => {
                                const {id,url,icon} = socialIcon;
                                return(
                                    <li key={id}>
                                        <a href={url}>{icon}</a>
                                    </li>
                                )
                            })
                        }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
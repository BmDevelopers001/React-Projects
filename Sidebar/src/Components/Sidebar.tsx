import { FaTimes } from 'react-icons/fa';
import logo from '../logo.svg';
import { links, linksType, social, socialType } from '../data';

const Sidebar: React.FC = () => {
    return (
        <aside className={`sidebar show-sidebar`}>
            <div className="sidebar-header">
                <img src={logo} alt="Coding Addict" className='logo'/>
                <button className='close-btn'>
                    <FaTimes />
                </button>
            </div>
            <ul className='links'>
                {
                    links.map((link : linksType) => {
                        const {id,url,text,icon} = link;
                        return (
                            <li key={id}>
                                <a href={url}>{icon} {text}</a>
                            </li>
                        )
                    })
                }
            </ul>

            <ul className='social-icons'>
                {
                    social.map((link : socialType) => {
                        const {id,url,icon} = link;

                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default Sidebar;
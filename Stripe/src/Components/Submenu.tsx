import {useEffect, useRef, useState, ReactNode} from 'react'
import { useGlobalContext } from "../context";

const Submenu: React.FC = () => {
    const {isSubmenuOpen, location, pages : {page,links}} = useGlobalContext();
    const container = useRef<HTMLDivElement>(null);
    const [columns, setColumns] = useState<string>('col-2')
    useEffect(() => {
        setColumns('col-2')
        const submenu = container.current;
        const {center,bottom} = location;
        submenu!.style.left = `${center}px`;
        submenu!.style.top = `${bottom}px`;
        if(links.length === 3) {
            setColumns('col-3');
        }

        if (links.length > 3) {
            setColumns('col-4');
        }

    },[location,links]);

    return (
        <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
            <h4>{page}</h4>
            <div className={`submenu-center ${columns}`}>
                {
                    links.map((link: { label: string, icon: ReactNode, url: string },index : number) => {
                        const {label,icon,url} = link;
                        return (
                            <a href={url} key={index}>
                                {icon}
                                {label}
                            </a>
                        )
                    })
                }
            </div>
        </aside>
    )
}

export default Submenu;
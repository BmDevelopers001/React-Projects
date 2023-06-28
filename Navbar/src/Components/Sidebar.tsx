
const Sidebar : React.FC = () => {
    return (
        <>
        <h4>Sidebar</h4>
        <div className="links-container show-container">
            <ul className="links">
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
        </>
    )
}

export default Sidebar;
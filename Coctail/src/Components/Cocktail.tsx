import { Link } from "react-router-dom";

type ReactProps = {
    image: string,
    name: string,
    id: string,
    info: string,
    glass: string
}

const Cocktail : React.FC<ReactProps> = ({image,name,id,info,glass}) => {
    return (
        <article className="cocktail">
            <div className="img-container">
                <img src={image} alt={name} />
            </div>
            <div className="cocktail-footer">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
                    Details
                </Link>
            </div>
        </article>
    )
}

export default Cocktail
import { dataType } from "../data";

type Props = {
    list: dataType[]
}

const List : React.FC<Props> = ({list}) => {
    return (
        <>
            {list.map(people => {
                return (
                    <article key={people.id} className="person">
                        <img src={people.image} alt={people.name} />
                        <div>
                            <h4>{people.name}</h4>
                            <p>{people.age} years</p>
                        </div>
                    </article>
                )
            })}
        </>
    )
}

export default List;
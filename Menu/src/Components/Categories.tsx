
type Props = {
    filterItems : any
    categories : string[];
}

const Categories : React.FC<Props> = ({filterItems,categories}) => {
    return (
        <div className="btn-container">
            {categories.map((category,index) => {
                return (
                    <button type="button" className="filter-btn" key={index} onClick={() => filterItems(category)}>
                        {category}
                    </button>
                )
            })}
            
        </div>
    )
}

export default Categories;
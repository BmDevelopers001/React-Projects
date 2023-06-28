import { itemType } from "../App";
import { FaEdit, FaTrash } from 'react-icons/fa';

export type listProps = {
    items: itemType[];
    removeItem: any;
    editItem: any;
}

const List : React.FC<listProps> = ({items,removeItem,editItem}) => {
    
    return (
        <div className="grocery-list">
            {items.map((item) => {
                const {id,title} = item;
                return (
                    <article key={id} className="grocery-item">
                        <p className="title">{title}</p>
                        <div className="btn-container">
                            <button type="button" className="edit-btn" onClick={() => editItem(id)}><FaEdit /></button>
                            <button type="button" className="delete-btn" onClick={() => removeItem(id)}><FaTrash /></button>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default List;
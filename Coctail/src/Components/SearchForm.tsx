import React, {useEffect,ReactNode} from 'react';
import { useGlobalContext } from "../context";

export type searchValueType = React.RefObject<HTMLInputElement>;


const SearchForm: React.FC = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue : searchValueType = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        searchValue!.current!.focus()
    }, [])

    const searchCocktail = () => {
        console.log(searchValue!.current!.value);
        
        setSearchTerm(searchValue!.current!.value);
    }

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Search Your favorite cocktail</label>
                    <input type="text" id='name' ref={searchValue} onChange={searchCocktail}/>
                </div>
            </form>
        </section>
    )
}

export default SearchForm
import {useState,useEffect} from 'react'
import Loading from "../Components/Loading";
import {useParams, Link} from 'react-router-dom';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

type coctailType = {
    name: string, 
    image: string, 
    info: string, 
    category: string, 
    glass: string, 
    instructions: string, 
    ingredients: any[]
}

const SingleCocktail = () => {
    const {id} = useParams();
    const [loading,setLoading] = useState<boolean>(false);
    const [cocktail,setCocktail] = useState<coctailType | any>(null);

    useEffect(() => {
        setLoading(true);
        async function getCocktail(){
            try {
                const res=  await fetch(`${url}${id}`);
                const data = await res.json();

                if(data.drinks){
                    const { 
                        strDrink: name, 
                        strDrinkThumb: image, 
                        strAlcoholic: info, 
                        strCategory: category, 
                        strGlass: glass, 
                        strInstructions: instructions, 
                        strIngredient1, 
                        strIngredient2, 
                        strIngredient3, 
                        strIngredient4, 
                        strIngredient5
                    } = data.drinks[0];

                    const ingredients : any[] = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];

                    const newCocktail = {
                        name,image,info,category,glass,instructions,ingredients
                    }

                    setCocktail(newCocktail);

                } else {
                    setCocktail(null)
                }

            } catch (error) {
                console.log(error);
            }
        }

        getCocktail()
        setLoading(false);
    },[id])

    if(loading) return <Loading />;

    if(!cocktail){
        return (
            <h2 className='section-title'>No cocktail to show.</h2>
        )
    }

    const { name, image, info, category, glass, instructions, ingredients } = cocktail;
    
    return (
        <section className='section cocktail-section'>
            <Link to='/' className='btn btn-primary'>
                Back Home
            </Link>
            <h2 className='section-title'>
                {name}
            </h2>
            <div className="drink">
                <img src={image} alt={name} />
                <div className="drink-info">
                    <p>
                        <span className='drink-data'>name :</span>
                        {name}
                    </p>
                    <p>
                        <span className='drink-data'>category :</span>
                        {category}
                    </p>
                    <p>
                        <span className='drink-data'>info :</span>
                        {info}
                    </p>
                    <p>
                        <span className='drink-data'>glass :</span>
                        {glass}
                    </p>
                    <p>
                        <span className='drink-data'>instructions :</span>
                        {instructions}
                    </p>
                    <p>
                        <span className='drink-data'>ingredients :</span>
                        {
                            ingredients.map((item : string[],index : number) => {
                                return item ? <span key={index}>{item},</span> : null
                            })
                        }
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SingleCocktail;
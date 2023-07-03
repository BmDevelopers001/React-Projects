import React, { useState, useContext, useEffect, useCallback, ReactNode, Dispatch } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export type initialType = {
    loading: boolean,
    setSearchTerm: Dispatch<React.SetStateAction<string>>,
    cocktails: any[]
}

const initialValue = {
    loading: true,
    searchTerm: 'a',
    setSearchTerm: () => { },
    cocktails: []
}

const AppContext = React.createContext<initialType>(initialValue);

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>('a');
    const [cocktails, setCocktails] = useState<[]>([]);

    const fetchDrinks = useCallback(
        async () => {
            setLoading(true);

            try {
                const response = await fetch(`${url}${searchTerm}`);
                const data = await response.json();

                const { drinks } = data;
                if (drinks) {
                    const newCocktails = drinks.map((item: {
                        idDrink: string,
                        strDrink: string,
                        strDrinkThumb: string,
                        strAlcoholic: string,
                        strGlass: string
                    }) => {
                        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

                        return {
                            id: idDrink,
                            name: strDrink,
                            image: strDrinkThumb,
                            info: strAlcoholic,
                            glass: strGlass
                        }
                    })

                    setCocktails(newCocktails);
                } else {
                    setCocktails([])
                }
            } catch (error) {
                console.log(error);
            }

            setLoading(false)
        }, [searchTerm]);

    useEffect(() => {
        fetchDrinks();
    }, [searchTerm,fetchDrinks])

    return (
        <AppContext.Provider value={{
            loading, cocktails, setSearchTerm
        }} >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
import { createContext, useState } from "react";

export const FavouritesContext = createContext({ // create a Context object -> JSX convention the starting uppercase
    // passing initial context value
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
});

function FavoritesContextProvider({ children }) { // this component later can be wrapped around and used through 'children' and interact with context
    const [favouriteMealIds, setFavouriteMealIds] = useState([]);
    
    function addFavourite(id) {
        setFavouriteMealIds((currentFavouriteIds) => { // in React when updating state based on prev. state snapshot, you should pass a function which automatically revceives it
            [...currentFavouriteIds, id];
        });
    }

    function removeFavourite(id) {
        setFavouriteMealIds((currentFavouriteIds) => {
            currentFavouriteIds.filter((mealId) => mealId !== id);
        });
    }

    const value = {
        ids: favouriteMealIds,
        addFavourite: addFavourite, // left-side refers to create a similar object like the context above, right-side refers to the function
        removeFavourite: removeFavourite
    };
    
    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}

export default FavoritesContextProvider;
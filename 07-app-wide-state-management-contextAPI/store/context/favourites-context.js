import { createContext } from "react";

const FavouritesContext = createContext({ // create a Context object -> JSX convention the starting uppercase
    // passing initial context value
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
});

function FavoritesContextProvider({ children }) { // this component later can be wrapped around and used through 'children' and interact with context
    
    
    return <FavouritesContext.Provider>{children}</FavouritesContext.Provider>
}

export default FavoritesContextProvider;
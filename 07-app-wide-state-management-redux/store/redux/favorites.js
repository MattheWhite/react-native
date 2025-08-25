import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        // all reducer actions automatically gets the latest state snapshot as parameter
        /* 
            With redux only you have to mutate your state inmutable way!
            With redux-toolkit you can mutate your state in a mutable way because the rest is taken care of by redux-toolkit
        */
        addFavorite: (state, action) => { // here we can pass another extra param, action's payload holds extra data informations
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
// Redux Store
import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from './favorites'; // the default export

export const store = configureStore({
    reducer: { // slices of data (state) and actions to change those data
        favoriteMeal: favoritesReducer
    }
});
import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
    },
    
    reducers: {
        getFavorites(state, action) {

        },
        addFavorite(state, action) {
            state.favorites = [...state.favorites, action.payload]
            localStorage.setItem('Favorites', JSON.stringify(state.favorites))
        },
        clearFavorites(state, action) {
            localStorage.removeItem('Favorites')
            state.favorites = [];
        }
    }
})

export const { getFavorites, addFavorite, clearFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer;
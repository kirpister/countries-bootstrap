import { createSlice } from '@reduxjs/toolkit';

const favorites = localStorage.getItem('Favorites') !== null ? JSON.parse(localStorage.getItem('Favorites')) : []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: favorites,
    },
    
    reducers: {
       
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
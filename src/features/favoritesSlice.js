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
        removeFavorite(state, action) {
            const newArray = [...state.favorites]
            newArray.splice(newArray.findIndex(e => e === action.payload), 1)
            state.favorites = [...newArray]
        },
        clearFavorites(state, action) {
            localStorage.removeItem('Favorites')
            state.favorites = [];
        }
    }
})

export const { getFavorites, addFavorite, clearFavorites, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import countryService from '../services/countries';

export const countriesSlice = createSlice({
    name: 'coutries',
    initialState: {
        countries: [],
        isLoading: true
    },

    reducers: {
        getCountries(state, action) {
            state.countries = action.payload
        }
    },
})

export const initializeCountries = () => {
    return async (dispatch) => {
        const countries = await countryService.getAll();
        dispatch(getCountries(countries));
        // getCountries is the action, countries is the payload
    }
} 

export const { getCountries }  =  countriesSlice.actions; 
export default countriesSlice.reducer;
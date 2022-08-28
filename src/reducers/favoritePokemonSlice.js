import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../utilities/localStorage";

const favPoke = getLocalStorage("favoritePokemon");

const initialState = {
    favoritePokemon: favPoke ? favPoke: [],
};

export const favoritePokemonSlice = createSlice({
    name: "favoritePokemon",
    initialState,

    reducers: {
        addFavoritePokemon: (state, action) => {
            state.favoritePokemon.push(action.payload);

            setLocalStorage("favoritePokemon", state.favoritePokemon)
        },
        removeFavoritePokemon: (state, action) => {
            const selectedPoke = action.payload;
            state.favoritePokemon = state.favoritePokemon.filter(
                (favorite) => favorite.id != selectedPoke
            );
            setLocalStorage("favoritePokemon", state.favoritePokemon);
        }
    }
});

export const { addFavoritePokemon, removeFavoritePokemon } = favoritePokemonSlice.actions;

export default favoritePokemonSlice.reducer;


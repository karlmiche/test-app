import React, { useState } from 'react';
import { useGetAllPokemonQuery } from '../reducers/apiSlice';

export const AllPokemon = () => {
 
    const { data: pokemon, error, isLoading } = useGetAllPokemonQuery();
  
    return (
      <>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : pokemon ? (
            pokemon.results.map((pokemon) => (
                <div key={pokemon.id}>
                    <button
                      className="favorite-button"
                    >
                      {pokemon.name}
                    </button>
                </div>
              ))
        ) : null}
      </>
    )
};

export default AllPokemon;
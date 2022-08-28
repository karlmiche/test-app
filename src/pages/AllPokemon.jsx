import React, { useState } from 'react';
import { useGetAllPokemonQuery } from '../reducers/apiSlice';
import PokemonCard from '../components/PokemonCard';

const AllPokemon = () => {
 
    const { data: pokemon, error, isLoading } = useGetAllPokemonQuery();
  
    return (
      <>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : pokemon ? (
            pokemon.results.map((pokemon) => (
               <PokemonCard pokemon={pokemon} />
              ))
        ) : null}
      </>
    )
};

export default AllPokemon;
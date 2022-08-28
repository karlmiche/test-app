import React, { useState } from 'react';
import { useGetAllPokemonQuery } from '../reducers/apiSlice';

const PokeDetails = ({ poke }) => {
    return (
      <div className="pokemon-details" key={poke.id}>
        <h3>{poke.name}</h3>  
      </div>
    )
  }

const pokeList = () => {
    const {
      data: pokemon,
      isLoading,
      isSuccess,
      isError,
      error
    } = useGetAllPokemonQuery();
};

let content

if (isLoading) {
  content = <Spinner text="Loading..." />
} else if (isSuccess) {
  content = pokemon.map(poke => <PokeDetails key={poke.id} poke={poke} />)
} else if (isError) {
  content = <div>{error.toString()}</div>
}

const AllPokemon = () => {
    <div>
        {pokeList}
    </div>
}

export default AllPokemon;
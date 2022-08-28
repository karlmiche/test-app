import React, { useState } from "react";

export const PokemonCard = (props) => {

 const name = props.pokemon.name;
 const types = props.pokemon.types;
 const description = props.pokemon.description;

 const minimalCard = (
    <div key={props.pokemon.id}>
      <h3 className="favorite-button">{name}</h3>
      <button>Favorite</button>
    </div>
 )

 const detailedCard = (
    <div>
        detailed card
    </div>
 )

  return (
    minimalCard
  );
};

export default PokemonCard;

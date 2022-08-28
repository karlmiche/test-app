import React, { useState } from "react";
import { useGetPokemonByNameQuery } from "../reducers/apiSlice";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState(null);

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
  };

  const handleSubmit = () => {
    const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(searchTerm);
    console.log(pokemon);
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter pokemon name" id="name" onChange={event => handleInputChange(event)}/>
            <button type="submit">Search them all!</button>
        </form>
    </div>
  );
};

export default SearchForm;
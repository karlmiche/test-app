import React, { useState } from "react";
import { useGetPokemonByNameQuery } from "../reducers/apiSlice";

const SearchForm = () => {
//   const [searchTerm, setSearchTerm] = useState("charizard");
//   const [selectedPoke, setSelectedPoke] = useState(null);

//   const {
//     data: pokemon,
//     error,
//     isLoading,
//   } = useGetPokemonByNameQuery();

//   const handleSubmit = () => {
//     setSelectedPoke(pokemon);
//   };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for Pokemon"
        />
        <button type="submit">Search them all!</button>
      </form> */}
      Search form!
    </div>
  );
};

export default SearchForm;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: 'pokemon',
  // All of our requests will have URLs starting with '/https://pokeapi.co/api/v2/'
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getAllPokemon: builder.query({
      query: () => 'pokemon?limit=100000&offset=0',
    }),
    getPokemonByName: builder.query({
      query: (name) => `/pokemon/${name}`,
    }),
  })
})


export const { useGetAllPokemonQuery, useGetPokemonByNameQuery } = apiSlice;

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import fetchdata from "./api";

function App() {
  const [pokemons, setPokemons] = useState();
  const [onePokemon, setOnePokemon] = useState();
  const [pokemonDetalil, setPokemonDetalil] = useState([]);

  useEffect(() => {
    getPokemons();
    getOnePokemon();
  }, []);

  const getPokemons = () => {
    fetchdata("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0").then(
      (data) => {
        setPokemons(data.results);
        data.results.map( pokemon => {
          fetchdata(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then((data) => {
            setPokemonDetalil( prev => [...prev, data]);
          });
        })
      }
    )
    ;
  };

  const getOnePokemon = (name = "ditto") => {
    fetchdata(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data) => {
      setOnePokemon(data);
    });
  };

  return (
    <div className="App">
      <Header />
      {pokemonDetalil && <Main pokemons={pokemonDetalil} />}
      <Footer />
    </div>
  );
}

export default App;

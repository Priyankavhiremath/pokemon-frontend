import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import fetchdata from "./api";

function App() {
  const [pokemons, setPokemons] = useState();
  const [onePokemon, setOnePokemon] = useState();

  useEffect(() => {
    getPokemons();
    getOnePokemon();
  }, []);

  const getPokemons = () => {
    fetchdata("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200").then(
      (data) => {
        setPokemons(data.results);
      }
    );
  };

  const getOnePokemon = (name = "ditto")=>{
    fetchdata(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      (data) => {
        setOnePokemon(data);
      }
    );
  }
 
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

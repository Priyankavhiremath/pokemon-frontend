import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {Switch, Route} from "react-router-dom";
import CardContainer from "./components/CardContainer";
import BattleCard from "./components/BattleCard"
import Loader from './components/Loader';

import fetchdata from "./api";

function App() {
  const [pokemons, setPokemons] = useState();
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [isloader, setLoader] = useState(true);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    setLoader(true)
    fetchdata("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
    .then((data) => {
        setPokemons(data.results);
        data.results.map( pokemon => {
          fetchdata(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then((data) => {
            setPokemonDetail( prev => [...prev, data]);
            setLoader(false)
          });
        })
      }
    );
  };

  return (
    <div className="App">
      <Header />
      {isloader && <Loader />}
      <Switch>
        <Route exact path="/">
        {pokemonDetail && <Main pokemons={pokemonDetail} />}
        </Route>
        <Route exact path="/pokemon/:pokeName">
            <CardContainer/>
        </Route>
        <Route exact path= "/pokemon/fight/:pokeName"> 
            <BattleCard/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchdata from "../api";
import BattleCardDetail from "./BattleCardDetail";
import Loader from "./Loader";

const BattleCard = () => {
  const [userPokemon, setUserPokemon] = useState();
  const [randomPokemon, setRandomPokemon] = useState();
  const [isloader, setLoader] = useState(true);
  const { pokeName } = useParams();

  useEffect(() => {
    if (pokeName) getUserPokemon(pokeName);
    getRandomPokemon();
  }, []);

  const getUserPokemon = (name = "ditto") => {
    fetchdata(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data) => {
      setUserPokemon(data);
    });
  };

  const getRandomPokemon = () => {
    setLoader(true);
    const number = Math.floor(Math.random() * 30) +1;
    fetchdata(`https://pokeapi.co/api/v2/pokemon/${number}`).then((data) => {
      setRandomPokemon(data);
      setLoader(false);
    });
  };

  return (
    <>
      {isloader && <Loader />}
      {userPokemon && randomPokemon && (
        <BattleCardDetail
          userPokemon={userPokemon}
          randomPokemon={randomPokemon}
        />
      )}
    </>
  );
};
export default BattleCard;

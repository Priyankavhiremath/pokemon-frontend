import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import BattleCardDesign from "./BattleCardDesign";
import vs_logo from "../image/vs.png";
import Loader from "./Loader"

const BattleCardDetail = ({ userPokemon, randomPokemon }) => {
  const [winner, setWinner] = useState();
  const [isloading, setIsLoading] = useState(false);
  const history = useHistory();
  let countNumber = 0;

  const Countdown = () => {
    const intervalId = setInterval(() => {
      if (countNumber >= 2) clearInterval(intervalId);
      countNumber++;
      setIsLoading(true)
    }, 1000);
  };

  const getResult = () => {
    setIsLoading(false)
    let winner = "";
    if (userPokemon.base_experience === randomPokemon.base_experience) {
      winner = "Tie";
      setWinner("The game ended in a tie.");
    }

    if (userPokemon.base_experience > randomPokemon.base_experience) {
      winner = userPokemon.species.name;
      setWinner(`${userPokemon.species.name} is winner`);
    } else {
      winner = randomPokemon.species.name;
      setWinner(`${randomPokemon.species.name} is winner`);
    }

    const data = {
      user_poke_name: userPokemon.species.name,
      random_poke_name: randomPokemon.species.name,
      winner_poke_name: winner,
    };

    fetch("https://pokemon-fight-api.herokuapp.com/game/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((error) => {
      console.error("Error:", error);
    });
  };

  const handleFight = () => {
    Countdown();
    const timeId = setTimeout(getResult, 4000);
  };

  const handleFightAgain = () => {
    history.push("/");
  };

  return (
    <div className="battleCard_container">
      <h2>POKE FIGHT</h2>
      <div className="battleCard_fighters">
        <BattleCardDesign pokemon={userPokemon} />
        <img src={vs_logo} alt="versus" width="200" />
        <BattleCardDesign pokemon={randomPokemon} />
      </div>
      {isloading && <Loader />}
      <Button variant="contained" color="primary" onClick={handleFight}>
        Fight
      </Button>
      <br />
      <br />
      {winner && (
        <>
          <h3>{winner}</h3>
          <br />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleFightAgain}
          >
            Fight Again
          </Button>
        </>
      )}
    </div>
  );
};

export default BattleCardDetail;

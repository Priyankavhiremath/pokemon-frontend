import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BattleCardDesign from "./BattleCardDesign";
import vs_logo from "../image/vs.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const BattleCardDetail = ({ userPokemon, randomPokemon }) => {
  const [winner, setWinner] = useState();
  const history = useHistory();

  const handleFight = () => {
    let winner = '';
    if (userPokemon.base_experience === randomPokemon.base_experience){
      winner = 'Tie'
      setWinner("The game ended in a tie.");
    }
     
    if (userPokemon.base_experience > randomPokemon.base_experience) {
      winner = userPokemon.species.name
      setWinner(`${userPokemon.species.name} is winner`);
    } else {
      winner = randomPokemon.species.name;
      setWinner(`${randomPokemon.species.name} is winner`);
    }

    const data = { 
      user_poke_name : userPokemon.species.name, 
      random_poke_name : randomPokemon.species.name, 
      winner_poke_name:  winner
    };

    fetch("https://pokemon-fight-api.herokuapp.com/game/save", {
      method: "POST", // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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

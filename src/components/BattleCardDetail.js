import React , {useState} from 'react';
import {useHistory} from 'react-router-dom'

const BattleCardDetail = ({ userPokemon, randomPokemon }) => {
  const [winner, setWinner] = useState();
  const history = useHistory();

  const handleFight = () =>{
      if(userPokemon.base_experience === randomPokemon.base_experience) return setWinner('The game ended in a tie.'); 
      if(userPokemon.base_experience > randomPokemon.base_experience){
          return setWinner(`${userPokemon.species.name} is winner`);
      }
      else{
        return setWinner(`${randomPokemon.species.name} is winner`);
      }
  }
  const handleFightAgain= () =>{
    history.push('/');
  }

  return (
      <>
      <div className="battle_container">
        <div className="user_pokemon_container">
          <h1>{userPokemon.species.name}</h1>
          <img src={userPokemon.sprites.front_default} alt={userPokemon.sprites.name} />
        </div>
        <div className="rendom_pokemon_container">
          <h1>{randomPokemon.species.name}</h1>
          <img src={randomPokemon.sprites.front_default} alt={randomPokemon.species.name} />
        </div>
      </div>
      <button onClick={handleFight} >Fight</button>
      {winner && (
          <>
          <p>{winner}</p>
          <button onClick={handleFightAgain}>Fight Again</button>
          </>
      )}
      </>
  );
};

export default BattleCardDetail;

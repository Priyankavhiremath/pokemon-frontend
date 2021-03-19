import React , {useState} from 'react';
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BattleCardDesign from './BattleCardDesign';
import vs_logo from '../image/vs.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

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
      <div className="battleCard_container">
        <h2>POKE FIGHT</h2>
        <div className="battleCard_fighters">        
          <BattleCardDesign pokemon={userPokemon}/>
          <img src={vs_logo} alt="versus"  width="200"/>
          <BattleCardDesign pokemon={randomPokemon}/>          
        </div>
        <Button variant="contained" color="primary" onClick={handleFight} >Fight</Button>
        <br />
        <br />
        {winner && (
            <>
            <h3>{winner}</h3>
            <br />
            <Button variant="contained" color="secondary" onClick={handleFightAgain}>Fight Again</Button>
            </>
        )}
             
      </div>
      
  );
};

export default BattleCardDetail;

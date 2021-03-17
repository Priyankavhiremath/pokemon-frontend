import React, {useState, useEffect} from "react";
import { useParams} from 'react-router-dom';
import fetchdata from "../api";
import BattleCardDetail  from './BattleCardDetail';

const BattleCard = ({pokemons}) =>{
    // const {pokeName} = useParams();
    // const [onePokemon, setOnePokemon] = useState();

    useEffect( () => {
       getRandomPokemon();
    }, [])

    // const getOnePokemon = (name = "ditto") => {
    //     fetchdata(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data) => {
    //       setOnePokemon(data);
    //     });
    //   }; 

    const getRandomPokemon = () => {
        const lenght= pokemons
        const number = Math.floor(Math.random()*30)
        console.log(number)
    }

    return(
        <>
        <h1>POKE FIGHT</h1>
        {/* {onePokemon && <BattleCardDetail  onePokemon={onePokemon}/>} */}
        </>
    )
}
export default BattleCard; 
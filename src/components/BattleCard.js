import React, {useState, useEffect} from "react";
import { useParams} from 'react-router-dom';
import fetchdata from "../api";
import BattleCardDetail  from './BattleCardDetail';

const BattleCard = () =>{
    const [userPokemon, setUserPokemon] = useState();
    const [randomPokemon, setRandomPokemon] = useState();
    const { pokeName} = useParams();

    useEffect( () => {
        getRandomPokemon();
        if(pokeName) getUserPokemon(pokeName);
       
    }, [])

    const getUserPokemon = (name = "ditto") => {
        fetchdata(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data) => {
            setUserPokemon(data);
        });
    }; 

    const getRandomPokemon = () => {
        const number = Math.floor(Math.random()*30)
        fetchdata(`https://pokeapi.co/api/v2/pokemon/${number}`).then((data) => {
            setRandomPokemon(data);
        });
    }

    return(
        <>
        <h4>POKE FIGHT</h4>
        {userPokemon && randomPokemon && <BattleCardDetail  userPokemon={userPokemon} randomPokemon={randomPokemon}/>}
        </>
    )
}
export default BattleCard; 
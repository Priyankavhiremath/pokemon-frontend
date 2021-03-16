import React, {useState, useEffect} from "react";
import { useParams} from 'react-router-dom';
import fetchdata from "../api";
import CardDetail  from './CardDetail';

const CardContainer = () =>{
    const {pokeName} = useParams();
    const [onePokemon, setOnePokemon] = useState();

    useEffect( () => {

        if(pokeName) getOnePokemon(pokeName);
        
    }, [])

    const getOnePokemon = (name = "ditto") => {
        fetchdata(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data) => {
          setOnePokemon(data);
        });
      }; 

    return(
        <>
        {onePokemon && <CardDetail  onePokemon={onePokemon}/>}
        </>

    )
}

export default CardContainer; 
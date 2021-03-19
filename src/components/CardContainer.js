import React, {useState, useEffect} from "react";
import { useParams} from 'react-router-dom';
import fetchdata from "../api";
import CardDetail  from './CardDetail';
import Loader from './Loader';

const CardContainer = () =>{
    const {pokeName} = useParams();
    const [onePokemon, setOnePokemon] = useState();
    const [isloader, setLoader] = useState(true);
    useEffect( () => {

        if(pokeName) getOnePokemon(pokeName);
    }, [])

    const getOnePokemon = (name = "ditto") => {
      setLoader(true)
        fetchdata(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data) => {
          setLoader(false)
          setOnePokemon(data);
        });
      }; 

    return(
        <>
        {isloader && <Loader />}
        {onePokemon && <CardDetail  onePokemon={onePokemon}/>}
        </>
    )
}
export default CardContainer; 
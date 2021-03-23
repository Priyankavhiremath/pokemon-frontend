import {useEffect, useState, Fragment} from 'react';
import fetchData  from '../api';

const LeaderBoard = () =>{
    const [results, setResults] = useState();

    useEffect( () =>{
        fetchData('https://pokemon-fight-api.herokuapp.com/game/leaderboard').
        then( data => setResults(data));
    }, [])

    return(
        <>
        {results && results.map( result =>{
            return(
                <Fragment key={result.id}>
                    <p>{result.user_poke_name}</p>
                    <p>{result.random_poke_name}</p>
                    <p>{result.winner_poke_name}</p>
                    <br/>
                    <br/>
                </Fragment>
            )
        })}
        </>
    )
}

export default LeaderBoard;
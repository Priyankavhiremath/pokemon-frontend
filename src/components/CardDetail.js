import {useHistory} from 'react-router-dom';

const CardDetail = ({onePokemon}) =>{
    const history = useHistory();
    console.log(onePokemon);
    const {species:{name},base_experience, sprites:{front_default}, height, weight  } = onePokemon;

    const handleClick = (name) =>{
        history.push(`/pokemon/fight/${name}`);
    }

    return(
        <>
        <h1>{name}</h1>
        <img src={front_default} alt={name} />
        <p>{base_experience}</p>
        <p>{height}</p>
        <p>{weight}</p>
        <button onClick={(e) => handleClick(name) }>Select Pokemon for Fight</button>
        </>
    )
       
    
}

export default CardDetail;


const CardDetail = ({onePokemon}) =>{
    console.log(onePokemon);
    const {species:{name},base_experience, sprites:{front_default}, height, weight  } = onePokemon;

    return(
        <>
        <h1>{name}</h1>
        <img src={front_default} alt={name} />
        <p>{base_experience}</p>
        <p>{height}</p>
        <p>{weight}</p>
        </>
    )
       
    
}

export default CardDetail;
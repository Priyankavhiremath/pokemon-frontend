import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const CardDetail = ({ onePokemon }) => {
  const history = useHistory();
  const {
    species: { name },
    base_experience,
    sprites: { front_default },
    height,
    weight,
  } = onePokemon;

  const handleClick = (name) => {
    history.push(`/pokemon/fight/${name}`);
  };

  return (
    <>
      <div className="card-detail-container">
        <div className="card-detail-content">
          <h3>{name.toUpperCase()}</h3>
          <img
            className="card-image"
            src={front_default}
            alt={name}
            width="150px"
          />
          <p>
            <span>Experience: </span>
            <span>{base_experience}</span>
          </p>
          <p>
            <span>Height: </span>
            <span>{height}</span>{" "}
          </p>
          <p>
            <span>Weight: </span>
            <span>{weight}</span>{" "}
          </p>
          <Button variant="contained" color="secondary" onClick={(e) => handleClick(name)}>
            Select Pokemon for Fight
          </Button>
        </div>
      </div>
    </>
  );
};

export default CardDetail;

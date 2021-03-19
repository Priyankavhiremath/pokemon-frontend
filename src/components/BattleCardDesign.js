import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 120,
  },
});

export default function BattleCardDesign({pokemon}) {
  const classes = useStyles();
  const {
    species: { name },
    sprites: { front_default },
  } = pokemon;

  return (
    <div>
          <img
            className="card-image"
            src={front_default}
            alt={name}
            width="200px"
          />
          <h4>{name.toUpperCase()}</h4>
      </div>
  );
}
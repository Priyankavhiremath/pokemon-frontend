import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function BattleCardDesign({pokemon}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={pokemon.sprites.name}
          height="200"
          image={pokemon.sprites.front_default}
          title={pokemon.sprites.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.species.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
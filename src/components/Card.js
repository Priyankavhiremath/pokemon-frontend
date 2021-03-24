import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 165,
  },
  media: {
    height: 150,
  },
});

export default function PokemonCard({ pokemon }) {
  const classes = useStyles();
  const history = useHistory();
  const {
    id,
    species: { name },
    sprites: { front_default },
    abilities,
    base_experience,
  } = pokemon;

  const handleClick = (name) =>{
    history.push(`/pokemon/${name}`);
  }

  return (
    <Card className={classes.root} onClick={ (e) => handleClick(name)}>
      
      <CardActionArea style={{ border: '1px solid black'}}>
        <CardMedia
          className={classes.media}
          image={front_default}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" align="left">
            {name.toUpperCase()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Experience : ${base_experience}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import { Grid, Container } from "@material-ui/core";
import Card from "./Card";

const Main = ({ pokemons }) => {
  return (
    <div className="main-fullwidth-container">
    <Container maxWidth="lg" className="main-container">
      <Grid container className="main-poke-content">
        <Grid
          container
          item
          sm={12}
          spacing={3}
          className="main-poke-content"
        >
          {pokemons.map((pokemon) => {
            return (
              <Grid item xm={6}  md={3}  key={pokemon.id} className="main-poke-content">
                <Card  pokemon={pokemon} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default Main;

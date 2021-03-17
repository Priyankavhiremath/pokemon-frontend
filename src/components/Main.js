import { Grid, Container } from "@material-ui/core";
import Card from "./Card";

const Main = ({ pokemons }) => {
  return (
    <Container maxWidth="md" className="main-container">
      <Grid container >
        <Grid
          container
          item
          sm={12}
          spacing={3}
        >
          {pokemons.map((pokemon) => {
            return (
              <Grid item sm={3} >
                <Card key={pokemon.id} pokemon={pokemon} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;

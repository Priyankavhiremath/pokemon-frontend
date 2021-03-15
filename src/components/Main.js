import { Grid, Container } from "@material-ui/core";
import Card from "./Card";

const Main = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid
          container
          item
          sm={12}
          style={{ border: "1px solid black" }}
          spacing={3}
        >
          {pokemons.map((pokemon) => {
            return (
              <Grid item sm={3} spacing={4}>
                <Card pokemon={pokemon} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;

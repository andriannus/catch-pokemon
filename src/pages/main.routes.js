import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import loadable from "@loadable/component";

const MyPokemon = loadable(() => {
  return import("pages/my-pokemon");
});

const PokemonDetail = loadable(() => {
  return import("pages/pokemon-detail");
});

const PokemonList = loadable(() => {
  return import("pages/pokemon-list");
});

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/pokemon" />
      </Route>
      <Route exact path="/mine" component={MyPokemon} />
      <Route exact path="/pokemon" component={PokemonList} />
      <Route exact path="/pokemon/:id" component={PokemonDetail} />
    </Switch>
  );
};

export default withRouter(MainRoutes);

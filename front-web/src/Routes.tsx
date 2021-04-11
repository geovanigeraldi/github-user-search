import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./core/components/Navbar";
import Home from "./pages/home";
import Search from "./pages/search";

const Routes = () => (
  <BrowserRouter>
    <Navbar />

    <Switch>
          
      <Route path="/" exact>
        <Home />
      </Route>
      
      <Route path="/search">
        <Search />
      </Route>

    </Switch>
  </BrowserRouter>
);

export default Routes;
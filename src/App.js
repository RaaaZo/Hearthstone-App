import React from "react";
import MainTemplate from "templates/MainTemplate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "ducks/store";
import LandingPage from "pages/LandingPage";
import ClassesPage from "pages/ClassesPage";
import Expansions from "pages/Expansions";
import TypesOfCardsPage from "pages/TypesOfCardsPage";
import RacesPage from "pages/RacesPage";
import QualityOfCards from "pages/QualityOfCards";
import ChampionSkins from "pages/ChampionSkins";
import HomePage from "pages/HomePage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainTemplate>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/classes' component={ClassesPage} />
            <Route exact path='/expansions' component={Expansions} />
            <Route exact path='/typesOfCards' component={TypesOfCardsPage} />
            <Route exact path='/races' component={RacesPage} />
            <Route exact path='/qualityOfCards' component={QualityOfCards} />
            <Route exact path='/championSkins' component={ChampionSkins} />
          </Switch>
        </MainTemplate>
      </Router>
    </Provider>
  );
}

export default App;

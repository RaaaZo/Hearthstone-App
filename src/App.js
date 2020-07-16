import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import ClassesPage from 'pages/ClassesPage';
import TypesOfCardsPage from 'pages/TypesOfCardsPage';
import RacesPage from 'pages/RacesPage';
import QualityOfCards from 'pages/QualityOfCards';
import ChampionSkins from 'pages/ChampionSkins';
import HomePage from 'pages/HomePage';
import Expansions from 'pages/Expansions/BasicExpansion';
import GoblinsExpansion from 'pages/Expansions/GoblinsExpansion';
import BlackrockMountainExpansion from 'pages/Expansions/BlackrockMountainExpansion';

function App() {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/classes' component={ClassesPage} />
          <Route exact path='/expansions' component={Expansions} />
          <Route
            exact
            path='/goblins_vs_gnomes_expansion'
            component={GoblinsExpansion}
          />
          <Route
            exact
            path='/blackrock_mountain'
            component={BlackrockMountainExpansion}
          />
          <Route exact path='/typesOfCards' component={TypesOfCardsPage} />
          <Route exact path='/races' component={RacesPage} />
          <Route exact path='/qualityOfCards' component={QualityOfCards} />
          <Route exact path='/championSkins' component={ChampionSkins} />
        </Switch>
      </MainTemplate>
    </Router>
  );
}

export default App;

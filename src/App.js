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
import NaxxramasExpansion from 'pages/Expansions/NaxxramasExpansion';
import BlackrockMountainExpansion from 'pages/Expansions/BlackrockMountainExpansion';
import GrandTournamentExpansion from 'pages/Expansions/GrandTournamentExpansion';
import LeagueOfExplorersExpansion from 'pages/Expansions/LeagueOfExplorersExpansion';
import OldGodsExpansion from 'pages/Expansions/OldGodsExpansion';
import KharazanExpansion from 'pages/Expansions/KharazanExpansion';
import GadzetanExpansion from 'pages/Expansions/GadzetanExpansion';
import UngoroExpansion from 'pages/Expansions/UngoroExpansion';
import FrozenThroneExpansion from 'pages/Expansions/FrozenThroneExpansion';
import ScrollToTop from 'components/atoms/ScrollToTop/ScrollToTop';
import FilteredExpansionByClassPage from 'pages/Expansions/FilteredExpansionByClassPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainTemplate>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/classes' component={ClassesPage} />
          <Route exact path='/expansions' component={Expansions} />
          <Route
            exact
            path='/expansions/:slug'
            component={FilteredExpansionByClassPage}
          />
          <Route
            exact
            path='/goblins_vs_gnomes_expansion'
            component={GoblinsExpansion}
          />
          <Route
            exact
            path='/goblins_vs_gnomes_expansion/:slug'
            component={FilteredExpansionByClassPage}
          />
          <Route exact path='/naxxramas' component={NaxxramasExpansion} />
          <Route
            exact
            path='/naxxramas/:slug'
            component={FilteredExpansionByClassPage}
          />
          <Route
            exact
            path='/blackrock_mountain'
            component={BlackrockMountainExpansion}
          />
          <Route
            exact
            path='/blackrock_mountain/:slug'
            component={FilteredExpansionByClassPage}
          />
          <Route
            exact
            path='/grand_tournament'
            component={GrandTournamentExpansion}
          />
          <Route
            exact
            path='/grand_tournament/:slug'
            component={FilteredExpansionByClassPage}
          />
          <Route
            exact
            path='/league_of_explorers'
            component={LeagueOfExplorersExpansion}
          />
          <Route
            exact
            path='/league_of_explorers/:slug'
            component={FilteredExpansionByClassPage}
          />
          <Route exact path='/old_gods' component={OldGodsExpansion} />
          <Route
            exact
            path='/old_gods/:slug'
            component={FilteredExpansionByClassPage}
          />
          <Route
            exact
            path='/one_night_in_kharazan'
            component={KharazanExpansion}
          />
          <Route
            exact
            path='/one_night_in_kharazan/:slug'
            component={FilteredExpansionByClassPage}
          />
          <Route
            exact
            path='/mean_streets_of_gadzetan'
            component={GadzetanExpansion}
          />
          <Route
            exact
            path='/mean_streets_of_gadzetan/:slug'
            component={FilteredExpansionByClassPage}
          />
          <Route exact path='/journey_to_ungoro' component={UngoroExpansion} />
          <Route
            exact
            path='/journey_to_ungoro/:slug'
            component={FilteredExpansionByClassPage}
          />
          <Route
            exact
            path='/knights_of_the_frozen_throne'
            component={FrozenThroneExpansion}
          />
          <Route
            exact
            path='/knights_of_the_frozen_throne/:slug'
            component={FilteredExpansionByClassPage}
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

import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import TypesOfCardsPage from "pages/TypesOfCardsPage";
import QualityOfCards from "pages/QualityOfCards";
import CardBacks from "pages/CardBacks";
import HomePage from "pages/HomePage";
import Expansions from "pages/Expansions/BasicExpansion";
import GoblinsExpansion from "pages/Expansions/GoblinsExpansion";
import NaxxramasExpansion from "pages/Expansions/NaxxramasExpansion";
import BlackrockMountainExpansion from "pages/Expansions/BlackrockMountainExpansion";
import GrandTournamentExpansion from "pages/Expansions/GrandTournamentExpansion";
import LeagueOfExplorersExpansion from "pages/Expansions/LeagueOfExplorersExpansion";
import OldGodsExpansion from "pages/Expansions/OldGodsExpansion";
import KharazanExpansion from "pages/Expansions/KharazanExpansion";
import GadzetanExpansion from "pages/Expansions/GadzetanExpansion";
import UngoroExpansion from "pages/Expansions/UngoroExpansion";
import FrozenThroneExpansion from "pages/Expansions/FrozenThroneExpansion";
import FilteredExpansionByClassPage from "pages/Expansions/FilteredExpansionByClassPage";
import ClassicExpansion from "pages/Expansions/ClassicExpansion";

const AppRouting = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={HomePage} />
      <Route exact path='/expansions' component={Expansions} />
      <Route
        exact
        path='/expansions/:slug'
        component={FilteredExpansionByClassPage}
      />
      <Route exact path='/classic' component={ClassicExpansion} />
      <Route
        exact
        path='/classic/:slug'
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
      <Route exact path='/qualityOfCards' component={QualityOfCards} />
      <Route exact path='/cardBacks' component={CardBacks} />
    </Switch>
  );
};

export default AppRouting;

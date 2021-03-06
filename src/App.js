import React from 'react'
import { Route } from 'react-router-dom'
import Players from './components/Players/Players';
import Team from './components/Team/Team';
import Tourneys from './components/Tournaments/Tournaments';
import Schedule from './components/Schedule/Schedule';
import NavBar from './components/NavBar/NavBar';
import AddGame from './components/Schedule/AddGame'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddTourneyGame from './components/Tournaments/AddTourneyGame';
import LeaguePlayers from './components/Players/LeaguePlayers';
import TourneyPlayers from './components/Players/TourneyPlayers';

function App() {
  return (
    <div>
      <NavBar />
      <Route path="/Login" exact component={Login} />
      <Route path="/Register" exact component={Register} />
      <Route path="/Tournaments" exact component={Tourneys} />
      <Route path="/" exact component={Schedule} />
      <Route path="/Players" exact component={Players} />
      <Route path="/LeaguePlayers" exact component={LeaguePlayers} />
      <Route path="/TourneyPlayers" exact component={TourneyPlayers} />
      <Route path="/Team" exact component={Team} />
      <Route path="/AddGame" exact component={AddGame} />
      <Route path="/AddTourneyGame" exact component={AddTourneyGame} />
    </div>
  );
}


export default App;

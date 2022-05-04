import React from 'react'
import { Route } from 'react-router-dom'
import Players from './components/Players/Players';
import Team from './components/Team/Team';
import Tourneys from './components/Tournaments/Tournaments';
import Schedule from './components/Schedule/Schedule';
import NavBar from './components/NavBar/NavBar';
import AddGame from './components/Schedule/AddGame'
import EditPlayer from './components/Players/EditPlayer'

function App() {
  return (
    <div>
      <NavBar />
      <Route path="/Tournaments" exact component={Tourneys} />
      <Route path="/" exact component={Schedule} />
      <Route path="/Players" exact component={Players} />
      <Route path="/Team" exact component={Team} />
      <Route path="/AddGame" exact component={AddGame} />
      <Route path="/Edit" exact component={EditPlayer} />
    </div>
  );
}

export default App;

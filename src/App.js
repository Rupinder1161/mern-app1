import React from 'react';
import { BrowserRouter as Router ,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component'
import ExcercisesList from './components/exercises-list.component'
import EditExcercises from './components/edit-exercise.component'
import CreateExcercises from './components/create-exercise.component'
import CreateUser from './components/create-user.component'

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" component={ExcercisesList}/>
      <Route path="/edit/:id" component={EditExcercises}/>
      <Route path="/create" component={CreateExcercises}/>
      <Route path="/user" component={CreateUser}/>
    <div className="Container">
    hello world
    </div>
    </Router>
  );
}

export default App;

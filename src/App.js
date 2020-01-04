import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from '@material-ui/core/Avatar';
import { Manager, Reference, Popper } from 'react-popper'

import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import ApproovedExcercises from "./components/approovedexcercises.component"
import Download from "./components/exportexcelfile.compoenent"

export class App extends Component {
    //  state = {
    //        text : {
    //             recipient:"",
    //             textmessage:""
    //        }
    //    }

    //    sendText = _ => {
    //     console.log("h")
    //     const {text} = this.state
    //     fetch(`http://localhost:3000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`    
    //     ).then(console.log("hello")) 
    //     .catch(err => console.log(err))
    //    }

    render() {

        // const {text} = this.state
        return (
            <Router>
            <div className="container">
            <Navbar />

           
            <br/>
            <Route path="/" exact component={ExercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />
            <Route path="/approoved" component={ApproovedExcercises}/>
            {/* <Download/> */}
            </div>
            
            {/* <div>
            <div style={{margin: 10}}> 
          <label>your number: </label>
          <input  
              value={text.recipient}
              onChange={e => this.setState({ text:{ ...text,recipient:e.target.value}})}
              />
        </div>
        <div style={{margin: 10}}> 
          <label>your message: </label>
          <input  type="text"
              value={text.textmessage}
              onChange={e => this.setState({ text:{ ...text,textmessage:e.target.value}})}
              />
        </div>
        <button onClick={this.sendText}> send</button>
            </div> */}
          </Router>
        )
    }
}

export default App

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
    this.exerciseList = this.exerciseList.bind(this)
    this.data = this.data.bind(this)
  }

  componentDidMount() {

    this.data()
    setInterval(this.data,10000)
    // axios.get('http://localhost:5000/excercises/')
    //   .then(response => {
    //     this.setState({ exercises: response.data })
    //     console.log(this.state.exercises)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })     
  }

  data(){
    axios.get('http://localhost:5000/excercises/')
    .then(response => {
      this.setState({ exercises: response.data })
      console.log(this.state.exercises)
      console.log(this.state.exercises.length)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/excercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3> Total Pending Complaints:{this.state.exercises.length}</h3>
        <table className="table table-striped table-dark table-hover">
          <thead className="thead-light">
            <tr>
              <th>Device Name</th>
              <th>Description</th>
              <th>Serail No.</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}
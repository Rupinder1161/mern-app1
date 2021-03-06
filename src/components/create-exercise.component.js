import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangesoldate = this.onChangesoldate.bind(this)
    this.state = {
      username: '',
      description: '',
      duration: '',
      date: new Date(),
      style: false,
      users: [],
      solddate:new Date(),
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onChangesoldate(date){  
  this.setState({
    solddate:date
  })

 }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
      style:false
    }

    console.log(exercise);

    axios.post('http://localhost:5000/excercises/add', exercise)
      .then(res => console.log(res.data));

     window.location = '/';
  }

  render() {
    // let date = new Date("11/07/2019")
    console.log(this.state.solddate)
    let difference =  this.state.date.getTime() -  this.state.solddate.getTime()
    let differenceInDays = Math.round(difference / (1000 * 3600 * 24))
    console.log(differenceInDays)
    console.log(difference)
     console.log(this.state.date)
    return (
    <div>
      <h3>Create complaint</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Product Name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>serial: </label>

          {/* <select ref="userInput"
              required
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}>
               <option>Yes</option>
               <option>NO</option>
          </select> */}
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>


        {/* <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div> */}



        <div className="form-group">
          <label>Purchasing-Date: </label> | <label style = {{color : (differenceInDays <= 90)? "green":"red"}}>{differenceInDays} days</label> <label style = {{visibility : (differenceInDays <= 90)? "hidden":"visible",color:"red"}}> Out of Warrenty</label>
          <div>
            <DatePicker
              selected={this.state.solddate}
              onChange={this.onChangesoldate}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create complaint" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
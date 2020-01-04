import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

var nodemailer = require('nodemailer');



const Exercise = props => (

  <tr style={{border: props.exercise.style ? '1pt solid green':' 1pt solid yellow',boxShadow: props.exercise.style ?' inset 2px 0px 2px green':' inset 2px 0px 2px yellow', backgroundImage:props.exercise.style ?'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0.6))':'linear-gradient(to right, rgba(0,255,0,0), rgba(0,255,0,0.6))' ,marginTop:"20px"}}>
    <td style ={{backgroundColor:'props.color'}}>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
    {/* <div > 
          <select 
           style={{backgroundColor: (props.color)  }}
          //  value={props.status} 
          onChange={props.status}
          >
            <option value="Complaint Taken">Complaint Taken</option>
            <option value="Video Sent">Video Sent</option>
            <option value="Fully approoved">Got Approoval</option>
          </select>
        </div> */}
    </td>
    
    <td>
      <Link to={"/edit/"+props.exercise._id} className="btn btn-dark">edit</Link> | <a href="#" className="btn btn-warning"  onClick={() => { props.deleteExercise(props.exercise._id) }}>Approve</a>
    </td>
  </tr>
)




const List = props => (
  
  <tr style={{color :"green"}}>
    <td>{props.tasks.username}</td>
    <td>{props.tasks.description}</td>
    <td>{props.tasks.duration}</td>
    <td>{props.tasks.date.substring(0,10)}</td>
    {/* <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td> */}
  </tr>
)
 const HStyle = {
  color: 'blue'   

}

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: [],
      deletdexcercise:[],
      username:'',
      description: '',
      duration: '',
      color:"red",
      date : '',
      deletdexcercises:[],
      style:true,
      bg:true,
      status:["Complaint Taken","Video Sent","Got Approoval"]
    };
    this.exerciseList = this.exerciseList.bind(this)
    this.data = this.data.bind(this)
    this.Love = this.Love.bind(this)
    this.status =this.status.bind(this)
    this.count = this.count.bind(this)
    // this.HStyle = this.HStyle.bind(this)
  }

  componentDidMount() {

    this.data()
    setInterval(this.data,5000)
    // axios.get('http://localhost:5000/excercises/')
    //   .then(response => {
    //     this.setState({ exercises: response.data })
    //     console.log(this.state.exercises)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })     
    this.count()
    setInterval(this.count,5000)
  }
 
  data(){
    axios.get('http://localhost:5000/excercises/')
    .then(response => {
      this.setState({ exercises: response.data })
      // console.log(this.state.exercises)
     // console.log(this.state.exercises.style)
    })
    .catch((error) => {
      console.log(error);
    })
  }


  deleteExercise(id) {
    axios.delete('http://localhost:5000/excercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id),
      deletdexcercise:this.state.exercises.filter(el => el._id === id),
      description:true
    })
   console.log(this.state.deletdexcercise.map(el => el._id))
  }
  

  count(){
    // axios.get('http://localhost:5000/excercises/')

    // .then(response => {
      this.setState({ 
        deletdexcercises: this.state.exercises.filter(i => i.style)
      })
      // console.log(this.state.exercises.filter(i =>i.style).length)
      // console.log(this.state.exercises)
     // console.log(this.state.exercises.style)
    // })
    // .catch((error) => {
    //   console.log(error);
    // })

  }

    // this.setState({
    //   
    // })
    // 
  






    deletdexcercise(){
      return this.state.deletdexcercise.map(cu =>{
          let d = cu.username

        return <List tasks={["hello","Love",d]}/>
      }
        
      )
    }

    status(e){
      return this.state.exercises.map(currentexercise => {
        // console.log(currentexercise.style)
        let h = e.target.value;
        console.log(h)
           if( h === "Complaint Taken"){
         
      console.log(currentexercise._id)
    
    } 
     })
    
   }
   
  
  
   

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
    // console.log(currentexercise.style)
    return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} color ={this.state.color} status={this.status} style={this.state.bg}/>;
      
    })
  }

  Love() {    
    return this.state.deletdexcercise.map(i => {
       const d = {
         username:i.username,
         description:i.description,
         duration:i.duration,
         date: new Date().toLocaleDateString(),
         status:""
        }
      //  ---------------------------
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'gurpreet1161@gmail.com',
          pass: 'Lookmeme1161'
        }
      });
      let gurpreet = 'love me'
      let device =" smok prince kit"
      
      var mailOptions = {
        from: 'gurpreet1161@gmail.com',
        to: 'gurpreet1161@gmail.com',
        subject: 'update on' + device + '@ Shosha Porirua',
        text: gurpreet
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 

     ///------------------------------
       console.log(d)
        return axios.post('http://localhost:5000/approoved/add',d)
        .then( res => console.log(res.data))
        .then(window.location = '/approoved')
        // <List tasks={i} />
          })
          
  } 
  

  render() {
    return (
      <div>
       <div style={{display: "inline"}}><h5 style={{display: "inline"}}> Total Pending Complaints:{this.state.exercises.length}</h5> | <h5 style={{display: "inline",color:"green"}}> Total Video Sent:{this.state.exercises.filter(i =>i.style).length}</h5></div> 
        <table className="table table-striped table-dark table-hover">
          <thead className="thead-light">
            <tr>
              <th>Device Name</th>
              <th>Description</th>
              <th>Serail No.</th>
              <th>Date</th>
              <th>Comments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
            {this.Love()}
            {/* <List tasks={["hello","Love"]}/> */}
          </tbody>
        </table>
      </div>
    )
  }
}


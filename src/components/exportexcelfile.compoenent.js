import React from "react";

import axios from "axios"
import ReactExport from "react-export-excel";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        name: "Johson",
        amount: 30000,
        sex: 'M',
        is_married: true
    },
    {
        name: "Monika",
        amount: 355000,
        sex: 'F',
        is_married: false
    },
    {
        name: "John",
        amount: 250000,
        sex: 'M',
        is_married: false
    },
    {
        name: "Josef",
        amount: 450500,
        sex: 'M',
        is_married: true
    }
];

const dataSet2 = [
    {
        name: "Johnson",
        total: 25,
        remainig: 16
    },
    {
        name: "Josef",
        total: 25,
        remainig: 7
    }
];




// const Exercise = props => (
//     <tr>
//       <td>{props.exercise.username}</td>
//       <td>{props.exercise.description}</td>
//       <td>{props.exercise.duration}</td>
//       <td>{props.exercise.date.substring(0,10)}</td>
//       <td>
//         <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
//       </td>
//     </tr>
//   )

// const exerciseList =() => {
//     return this.state.exercises.map(currentexercise => {
//      // console.log(currentexercise)
//       return currentexercise 
//     //   <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
      
//     })
//   }

  const Exercise = props => (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0,10)}</td>
      <td>
        {/* <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a> */}
      </td>
    </tr>
  )


class Download extends React.Component {

    constructor(props) {
        super(props);
        this.state = {exercises: [],
        data:[]};
         this.exerciseList = this.exerciseList.bind(this)
        this.data = this.data.bind(this)
        
      }

      componentDidMount() {

        this.data()
    }

    data(){
        axios.get('http://localhost:5000/excercises/')
        .then(response => {
          this.setState({ exercises: response.data,
          data:this.state.exercises.username })
          // console.log(this.state.exercises.map(li =><h1>{li.username}</h1>))
          // console.log(this.state.exercises.length)
        })
        .catch((error) => {
          console.log(error);
        })
      }
      exerciseList() {
        return this.state.exercises.map(currentexercise => {
          console.log(currentexercise)
          return(<h6>{currentexercise.username}</h6>
        //   <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
          ) 
        })
      }
       
     

    render() {
      
        return (
          <div>
            <ExcelFile>
                <ExcelSheet data={dataSet1} name="Employees">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="Wallet Money" value="amount"/>
                    <ExcelColumn label="Gender" value="sex"/>
                    <ExcelColumn label="Marital Status"
                                 value={(col) => col.is_married ? "h" : "Single"}/>
                </ExcelSheet>
                <ExcelSheet data={dataSet2} name="Leaves">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="Total Leaves" value="total"/>
                    <ExcelColumn label="Remaining Leaves" value="remaining"/>
                </ExcelSheet>
            </ExcelFile>
            {this.exerciseList()}
            </div>
        );
    }
}
export default Download ;
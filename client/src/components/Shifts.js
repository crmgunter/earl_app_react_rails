import React, { Component } from "react";
import axios from "axios";
import NewShiftForm from "./NewShiftForm";
import styled from "styled-components";
import Positions from './Positions'

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Border = styled.div`
  border: 1px solid black;
  padding: 20px;
`;

class Shifts extends Component {
  state = {
      allEmployees: [{}],
      dayCook: "",
      nightCook: "",
      fry: "",
      prep: "",
    shifts: [
      {
        date: "",
        note: "",
        time: "",
        employees: [
          {
            name: ""
          }
        ]
      }
    ],
    newShiftToggle: false
  };

getEmployees = async () => {
    const res = await axios.get('/api/list_of_employees')
    await this.setState({allEmployees: res.data})
    console.log(this.state.allEmployees)
}

  componentDidMount() {
    this.getAllShifts();
    this.getEmployees()
  }

  getAllShifts = async () => {
    const shifts = await axios.get("/api/shifts");
    console.log(shifts.data);
    await this.setState({
      shifts: shifts.data
    });
  };

  handleDropDownChange = async (event) => {
    try{
        console.log(event.target.value)
        const shiftId = this.state.shifts.map((shift) => {
            return shift.id
        })

        console.log(shiftId)
        await this.setState({ employees: event.target.value })
    }
    catch (error) {
        console.log(error)
    }
}

  toggleForm = () => {
    this.setState({ newShiftToggle: !this.state.newShiftToggle });
  };

  render() {
    return (
      <div>
        <h1>Hey from shifts</h1>
        <FlexContainer>
          {this.state.shifts.map(shift => (
            <div>
              <Border>
                <div>
                  {shift.date} {shift.time}
                </div>
                <div>{shift.note}</div>
                <Positions shiftId={shift.id}
                allEmployees={this.state.allEmployees}
                handleDropDownChange={this.handleDropDownChange}/>
                {shift.employees.map(employee => (
                  <div>
                    <div>{employee.name}</div>
                  </div>
                ))}
              </Border>
            </div>
          ))}
        </FlexContainer>
        <button onClick={this.toggleForm}>Add Shift</button>
        {this.state.newShiftToggle ? (
          <NewShiftForm getAllShifts={this.getAllShifts}
          toggleForm={this.toggleForm}/>
        ) : null}
      </div>
    );
  }
}

export default Shifts;

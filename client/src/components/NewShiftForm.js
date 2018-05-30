import React, { Component } from "react";
import axios from "axios";

// IMPORTANT NOTE
// I'M LEAVING OFF WITH A WORKING NEW SHIFT FORM
// BUT I NEED TO GET THE EMPLOYEES SELECTED FROM DROPDOWN MENUS
// TO BE ADDED TO EMPLOYEES ARRAY IN STATE
// IT'S CURRENTLY ONLY ADDING WHICHEVER ONE I SELECT
// AND WHEN I SELECT A NEW ONE, IT JUST REPLACES THE LAST
// NOT BEING SAVED TO ARRAY, BEING SAVED AS STRING

class NewShiftForm extends Component {
    state = {
        date: "",
        note: "",
        employees: [{}],
        time: "",
        allEmployees: [{}]
    }

    componentDidMount() {
        this.getEmployees()
    }

    getEmployees = async () => {
        const res = await axios.get('/api/list_of_employees')
        await this.setState({allEmployees: res.data})
        console.log(this.state.allEmployees)
    }

    handleChange = async (event) => {
        const val = event.target.name
        const newState = {...this.state}
        newState[val] = event.target.value
        await this.setState(newState)
        console.log(this.state)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            date: this.state.date,
            note: this.state.note,
            employees: this.state.employees,
            time: this.state.time
        }
        await console.log(payload)
        await axios.post('/api/shifts', payload)
        await this.props.getAllShifts()
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="date" placeholder="date" value={this.state.date}/>
          <input onChange={this.handleChange} type="text" name="note" placeholder="note" value={this.state.note}/>
          <select onChange={this.handleChange} type="text" name="employees" placeholder="employees">
            {this.state.allEmployees.map((employee) => (
                    <option key={employee.id} value={employee.name}>{employee.name}</option>
            ))}
          </select>
          <select onChange={this.handleChange} name="employees" value={this.state.employees}>
            {this.state.allEmployees.map((employee) => (
                    <option value={employee.name}>{employee.name}</option>
            ))}
          </select>
          <select onChange={this.handleChange} type="text" name="employees">
            {this.state.allEmployees.map((employee) => (
                    <option value={employee.name}>{employee.name}</option>
            ))}
          </select>
          <input onChange={this.handleChange} type="text" name="time" placeholder="time" value={this.state.time}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewShiftForm;

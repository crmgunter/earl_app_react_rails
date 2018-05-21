import React, { Component } from 'react';
import axios from 'axios'

class Shifts extends Component {
    state = {
        shifts: [{
            date: '',
            note: '',
            time: '',
            employees: [{
                name: ''
            }]
        }]
    }
    componentDidMount() {
        this.getAllShifts()
    }

    getAllShifts = async () => {
        const shifts = await axios.get('/api/shifts')
        console.log(shifts.data)
        await this.setState({
            shifts: shifts.data
        })
    }

    render() {
        return (
            <div>
                <h1>Hey from shifts</h1>
                {this.state.shifts.map((shift) => (
                    <div>
                        <div>{shift.date} {shift.time}</div>
                        <div>{shift.note}</div>
                        {shift.employees.map((employee) => (
                            <div>
                                <div>{employee.name}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Shifts;
import React, { Component } from 'react';
import axios from 'axios'
import NewShiftForm from './NewShiftForm'
import styled from 'styled-components'

const FlexContainer = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`

const Border = styled.div`
border: 1px solid black;
padding: 20px;
`

class Shifts extends Component {
    state = {
        shifts: [{
            date: '',
            note: '',
            time: '',
            employees: [{
                name: ''
            }]
        }],
        newShiftToggle: false
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

    toggleForm = () => {
        this.setState({ newShiftToggle: !this.state.newShiftToggle})
    }

    render() {
        return (
            <div>
                <h1>Hey from shifts</h1>
                <FlexContainer>
                {this.state.shifts.map((shift) => (
                    <div>
                        <Border>
                        <div>{shift.date} {shift.time}</div>
                        <div>{shift.note}</div>
                        {shift.employees.map((employee) => (
                            <div>
                                <div>{employee.name}</div>
                            </div>
                        ))}
                        </Border>
                    </div>
                ))}
                </FlexContainer>
                <button onClick={this.toggleForm}>Add Shift</button>
                {this.state.newShiftToggle? (<NewShiftForm getAllShifts={this.getAllShifts}/>) : null}
            </div>
        );
    }
}

export default Shifts;
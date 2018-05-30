import React, { Component } from 'react';

class Positions extends Component {
    render() {
        return (
            <div>
                <select
                  onChange={this.props.handleDropDownChange}
                  type="text"
                  name="employees"
                //   value={this.props.shiftId}
                >
                  {this.props.allEmployees.map(employee => (
                    <option key={employee.id} value={employee.id}>
                      {employee.name}
                    </option>
                  ))}
                </select>
                <select
                  onChange={this.props.handleDropDownChange}
                  name="employees"
                //   value={this.props.employees}
                >
                  {this.props.allEmployees.map(employee => (
                    <option value={employee.id}>{employee.name}</option>
                  ))}
                </select>
                <select
                  onChange={this.props.handleDropDownChange}
                  type="text"
                  name="employees"
                >
                  {this.props.allEmployees.map(employee => (
                    <option value={employee.id}>{employee.name}</option>
                  ))}
                </select>
            </div>
        );
    }
}

export default Positions;
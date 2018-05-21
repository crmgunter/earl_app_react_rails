import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the home page</h1>
                <Link to="/shifts">See all shifts</Link>
            </div>
        );
    }
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../NavBar'
class PieChart extends React.Component {
    render() {
        return(
		<div>
             <NavBar />   
            <h1>Display a pie chart showing a distribution of languages the user worked with based off the repositories they have</h1>
		</div>
        );
    }
}

export default PieChart;
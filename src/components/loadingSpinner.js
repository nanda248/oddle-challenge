import React from 'react';
import '../App.css';

const LoadingSpinner = (props) => (
    <center><img src="spinner.png" className="App-logo" alt={`App-logo-${props.name}`} /></center>
 );

 export default LoadingSpinner;
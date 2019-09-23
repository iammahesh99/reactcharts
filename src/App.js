import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Components/Chart'

function App() {
  return (
    <div className="App" style={{width: 500, height: 300, backgroundColor: 'powderblue'}}>
     
    <Chart  height='200'/>
    </div>
  );
}

export default App;

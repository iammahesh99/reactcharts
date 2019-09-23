import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
import axios from 'axios';
class Chart extends Component{
	constructor(props){
		super(props);
		this.state= {
			persons: [],
			chartData:{
				labels:['Store1','Store2','Store3','Store4'],
				datasets:[
							{
								label:'Quantity',
								data:[400,300,500,213],
								backgroundColor:[
									'rgba(255, 99, 132, 0.6)',
									'rgba(54, 161, 235, 0.6)',
									'rgba(255, 206, 86, 0.6)',
									'rgba(75, 109, 132, 0.6)'
								]

							}
				          ]

			}

		}

	}

	componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
      	console.log(res);
      	const persons = res.data;
        this.setState({ persons: persons});
      })
  	}







	render(){
		return (
			<div className="chart">
				<Bar
					  data={this.state.chartData}
					  
					  options={{ 
					  	
					  }}
				/>

				<div>
        			{ this.state.persons.map(pe => <p>{pe.name}</p>)}
        		</div>
        				
			 </div>
			)
	}
}
export default Chart;

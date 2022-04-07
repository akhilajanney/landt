import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class Example extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            series: [44,12],
            labels: ['Apple', 'Mango'],
            legend: {
                position: 'bottom',
              },
              dataLabels: {
                enabled: false
              },
              sparkline: {
                enabled: true
              },
              
             colors: ['#546E7A', '#E91E63'],      
          },
        }
    }
       
  render() {
    return (
      <div>
    <div className="donut">
        <Chart options={this.state.options} series={this.state.options.series} type="donut" width="350" />
      </div>
      </div>
    )
  }
}



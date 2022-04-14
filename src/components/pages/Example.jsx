import axios from 'axios';
import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class Example extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          series1: [],
          options1: 
          {},
          options: {},
          series: [44, 55, 41, 17, 15],
          labels: ['A', 'B', 'C', 'D', 'E'],
          Chart: {
            animations: {
                enabled: true,
                easing: 'easein',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
        }
        }
    }
    componentDidMount(){
  axios({method:'GET',url:'/api/asset/count'})
  .then((response)=>{
    if(response.data.length>0){
    const empact = response.data.emp.active;
            const emptot = response.data.emp.total;
            
            this.setState({
              series1: [
                  empact,
                  emptot - empact
              ]
          });

          this.setState({
            options1: {
                labels: [
                    'Active', 'Inactive'
                ],
                legend: {
                    position: 'bottom'
                },
                dataLabels: {
                    enabled: false
                },
                colors: [
                    '#5FE1E0', '#bff3f3'
                ],
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                              show:true,
                              name: {
                                show: false,
                                offsetY: -16,
                              },
                                total: {
                                    show: true,
                                    label: '',
                                    formatter: () => empact + '/' + emptot,
                                },
                                chart: {
                                    animations: {
                                        enabled: true,
                                        easing: 'easein',
                                        speed: 300,
                                        animateGradually: {
                                            enabled: true,
                                            delay: 10
                                        },
                                        dynamicAnimation: {
                                            enabled: true,
                                            speed: 80
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, 
            },
        })
      } 
  })
  .catch((error)=>{
    console.log(error);
  })
    }
       
  render() {
    const {
      series1,
      series2,series3
  } = this.state;
    return (
      <div className='maindiv' style={{overflowY:'scroll'}}>
    <div className="donut">
       
        <Chart series={series1}
                                    // options={options1}
                                    type="donut"
                                    width="250"/>
      </div>
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
      </div>
    )
  }
}



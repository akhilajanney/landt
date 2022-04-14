import axios from 'axios';
import React, {Component} from 'react'
import Chart from 'react-apexcharts'
import {Link} from 'react-router-dom';
import $ from 'jquery'

export default class Home extends Component {

    constructor(props) {
        super(props);
        let emp = this.empact;
        this.state = {
            series1: [],
            options1: {},
            series2: [],
            options2: {},
            series3: [],
            options3: {}
        }
    }

    componentDidMount() {

        axios({method: 'GET', url: '/api/asset/count'}).then((response) => {
            // console.log(response)
            const empact = response.data.emp.active;
            const emptot = response.data.emp.total;
            const assetact = response.data.asset.active;
            const assettot = response.data.asset.total;
            const utiact = response.data.utilization.active;
            const utitot = response.data.utilization.total;
            if(empact!=' ' || assetact!='' || utiact!=' '){
            this.setState({
                series1: [
                    empact,
                    emptot - empact
                ],
                series2: [
                    assetact,
                    assettot - assetact
                ],
                series3: [
                    utiact,
                    utitot - utiact
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
                                                delay: 550
                                            },
                                            dynamicAnimation: {
                                                enabled: true,
                                                speed: 50
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                },

                options2: {
                    labels: [
                        'Active', 'Inactive'
                    ],
                    legend: {
                        position: 'bottom'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    },

                    colors: [
                        '#ff4d4d', '#ffb3b3'
                    ],

                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                  show:true,
                                  name: {
                                    show: false,
                                    // color:'#00629b',
                                    offsetY: -16,
                                  },
                                    total: {
                                        show: true,
                                        label: '',
                                        formatter: () => assetact + '/' + assettot,
                                    }
                                }
                            }
                        }
                    }
                },

                options3: {
                    labels: [
                        'Active', 'Inactive'
                    ],
                    legend: {
                        position: 'bottom'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    },

                    colors: [
                        '#66ffff', '#b3ffff'
                    ],

                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                  show:true,
                                  name: {
                                    show: false,
                                    color:'#00629b',
                                    offsetY: -16,
                                  },
                                    total: {
                                        show: true,
                                        label: '',
                                        formatter: () => utiact + '/' + utitot,
                                    }
                                }
                            }
                        }
                    }
                }
                
            })
        }
 

        }).catch((error) => {
          if (error.response.status === 403) {
            $("#config_displayModal").css("display", "block");
            $("#content").text("User Session has timed out. Please Login again");
          }
        })
    }

    sessionTimeout = () => {
        $("#config_displayModal").css("display", "none");
        sessionStorage.removeItem('login')
        window.location.pathname = '/login'
    };
    render() {
        const {
            series1,
            options1,
            series2,
            options2,
            series3,
            options3
        } = this.state;
        // console.log("REnder====", series1);
        return (
            <>
                <div className='maindiv'>
                    <div style={
                        {marginLeft: '35px'}
                    }>
                        <h1 style={
                            {
                                marginTop: '15px',
                                color: '#0000008f'
                            }
                        }>Overview</h1>

                        <div style={
                            {
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: "765px"
                            }
                        }>
                            <div style={
                                {
                                    width: '240px',
                                    height: '260px',
                                    background: 'white',
                                    borderRadius: '10px',
                                    boxShadow: '8px 4px 20px 0px rgb(128 128 128 / 96%)',
                                    position: 'relative'
                                }
                            }>
                                <p style={
                                    {
                                        textAlign: 'center',
                                        color: '#888F9F',
                                        fontFamily: 'Poppins-Regular'
                                    }
                                }>Employee Tag</p>
                                <Chart series={series1}
                                    options={options1}
                                    type="donut"
                                    width="250"/>
                            </div>

                            <div style={
                                {
                                    width: '240px',
                                    height: '260px',
                                    background: 'white',
                                    borderRadius: '10px',
                                    boxShadow: '8px 4px 20px 0px rgb(128 128 128 / 96%)'
                                }
                            }>
                                <p style={
                                    {
                                        textAlign: 'center',
                                        color: '#888F9F',
                                        fontFamily: 'Poppins-Regular'
                                    }
                                }>Asset Tag</p>
                                <Chart series={series2}
                                    options={options2}
                                    type="donut"
                                    width="250"/>
                            </div>
                            <div style={
                                {
                                    width: '240px',
                                    height: '260px',
                                    background: 'white',
                                    borderRadius: '10px',
                                    boxShadow: '8px 4px 20px 0px rgb(128 128 128 / 96%)'
                                }
                            }>
                                <p style={
                                    {
                                        textAlign: 'center',
                                        color: '#888F9F',
                                        fontFamily: 'Poppins-Regular'
                                    }
                                }>Utilization</p>
                                <Chart series={series3}
                                    options={options3}
                                    type="donut"
                                    width="250"/>
                            </div>
                        </div>


                        <div className='actions'>
                            <h3 style={
                                {
                                    paddingTop: '15px',
                                    color: '#888F9F',
                                    marginLeft: '20px'
                                }
                            }>Quick Actions</h3>
                            <div style={
                                {
                                    display: 'flex',
                                    marginLeft: '30px'
                                }
                            }>
                                <div>
                                    <Link to='/register'>
                                        <img src="/images/reg.png" alt=""
                                            style={
                                                {
                                                    width: '230px',
                                                    cursor: 'pointer'
                                                }
                                            }/><br/>
                                    </Link>

                                    <Link to='/realtime'>
                                        <img src="/images/realtime.png" alt=""
                                            style={
                                                {
                                                    width: '230px',
                                                    marginTop: '5px',
                                                    cursor: 'pointer'
                                                }
                                            }/>
                                    </Link>
                                </div>

                                <div>
                                    <Link to='/alerts'>
                                        <img src="/images/alerts.png" alt=""
                                            style={
                                                {
                                                    width: '230px',
                                                    cursor: 'pointer'
                                                }
                                            }/><br/>
                                    </Link>
                                    <Link to='/health'>
                                        <img src="/images/systemhealth.png" alt=""
                                            style={
                                                {
                                                    width: '230px',
                                                    marginTop: '5px',
                                                    cursor: 'pointer'
                                                }
                                            }/>
                                    </Link>
                                </div>
                                <div style={
                                    {marginTop: '35px'}
                                }>
                                    <Link to='/utilization'>
                                        <img src="/images/utilization.png" alt=""
                                            style={
                                                {
                                                    width: '230px',
                                                    cursor: 'pointer'
                                                }
                                            }/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div style={
                        {
                            float: 'right',
                            width: '27%',
                            background: 'white',
                            marginTop: '-430px',
                            marginRight: '10px',
                            height: '280px',
                            borderRadius: '10px'
                        }
                    }>
                        <div style={
                            {
                                display: 'flex',
                                justifyContent: 'center'
                            }
                        }>
                            <i className="far fa-bell"
                                style={
                                    {
                                        fontSize: '20px',
                                        paddingTop: '14px',
                                        color: '#888F9F',
                                        marginRight: '6px'
                                    }
                            }></i>
                            <h3 style={
                                {
                                    paddingTop: '10px',
                                    color: '#888F9F',
                                    margin: '0px',
                                    textAlign: 'center'
                                }
                            }>
                                Alerts History
                            </h3>
                        </div>
                    </div>
                    <div id="config_displayModal" className="modal">
                        <div className="modal-content">
                            <p id="content"
                                style={
                                    {textAlign: "center"}
                            }></p>
                            <button id="ok" className="btn-center btn success-btn"
                                onClick={
                                    this.sessionTimeout
                            }>
                                OK
                            </button>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

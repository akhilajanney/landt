import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import sidebar from './sidebar.css'
import $ from 'jquery'
import styles from '../styles.css'
export function  sidelinkClicked (id) {
    $('.sideLink').removeAttr("style");
    $("#" + id).css({
      "color": "#00629B",
      "background": "linear-gradient(to right,  #d7e1f4 , #ebf0fa)",
      "border-left": "3px solid #00629B",
      "font-weight": "bold",
  });


 }

export default class Leftsidebar extends Component {
  componentDidMount(){
    sidelinkClicked('option0')
  }
  logout=()=>{
    sessionStorage.removeItem('login')
    window.location.pathname='/login'
  }
  render() {
    return (
        <>
         <div className='sidebar'>
            {/* <Link to='/home'> */}
         <img src="/images/vacuslogo.png" alt="logo" 
            style={{
                width: '68%',
                marginTop: '25px',
                marginLeft: '32px',
                marginBottom:'28px',
                cursor:'pointer'
               }}
            />
            {/* </Link> */}
             <Link to='/home' style={{ textDecoration: 'none' }}>
                                    <span>
                                        <div style={{marginTop:'100px',color:'green'}}
                                           onClick={() => sidelinkClicked("option0")}
                                            className='sideLink'
                                            id="option0"
                                      >
                                            <i className="fas fa-home"
                                                style={{
                                                    fontSize: '20px',
                                                    marginRight: '10px',
                                                    marginTop: "2px",
                                                    color:'#00629B'
                                                }}>
                                            </i>
                                            <span style={{ fontSize: "17px",color:'#00629B' }}>Home</span>
                                        </div>
                                    </span>
              </Link>
              
              <Link to='/register' style={{ textDecoration: 'none' }}>
                                    <span>
                                        <div 
                                           onClick={() => sidelinkClicked("option1")}
                                            className='sideLink'
                                            id='option1'
                                        >
                                            <i className="fas fa-edit"
                                                style={{
                                                    fontSize: '20px',
                                                    marginRight: '10px',
                                                    marginTop: "2px",
                                                    color:'#00629B'
                                                }}>
                                            </i>
                                            <span style={{ fontSize: "17px",color:'#00629B' }}>Registration</span>
                                        </div>
                                    </span>
              </Link>

              <Link to='/realtime' style={{ textDecoration: 'none' }}>
                                    <span>
                                        <div 
                                           onClick={() => sidelinkClicked("option2")}
                                            className='sideLink'
                                            id="option2"
                                           >
                                            <i className="fas fa-map-marker-alt"
                                                style={{
                                                    fontSize: '20px',
                                                    marginRight: '10px',
                                                    marginTop: "2px",
                                                    color:'#00629B'
                                                }}>
                                            </i>
                                            <span style={{ fontSize: "17px",color:'#00629B' }}>Real-Time Tracking</span>
                                        </div>
                                    </span>
              </Link>

              <Link to='/alerts' style={{ textDecoration: 'none' }}>
                                    <span>
                                        <div 
                                           onClick={() => sidelinkClicked("option3")}
                                            className='sideLink'
                                            id="option3"
                                          >
                                            <i className="fas fa-lightbulb-on"
                                                style={{
                                                    fontSize: '20px',
                                                    marginRight: '10px',
                                                    marginTop: "2px",
                                                    color:'#00629B'
                                                }}>
                                            </i>
                                            <span style={{ fontSize: "17px",color:'#00629B' }}>Alerts</span>
                                        </div>
                                    </span>
              </Link>

              <Link to='/health' style={{ textDecoration: 'none' }}>
                                    <span>
                                        <div 
                                           onClick={() => sidelinkClicked("option4")}
                                            className='sideLink'
                                            id="option4"
                                           >
                                            <i className="fas fa-medkit"
                                                style={{
                                                    fontSize: '20px',
                                                    marginRight: '10px',
                                                    marginTop: "2px",
                                                    color:'#00629B'
                                                }}>
                                            </i>
                                            <span style={{ fontSize: "17px",color:'#00629B' }}>System Health</span>
                                        </div>
                                    </span>
              </Link>
              <Link to='/utilization' style={{ textDecoration: 'none' }}>
                                    <span>
                                        <div 
                                           onClick={() => sidelinkClicked("option5")}
                                            className='sideLink'
                                            id="option5"
                                           >
                                            <i className="fas fa-sim-card"
                                                style={{
                                                    fontSize: '20px',
                                                    marginRight: '10px',
                                                    marginTop: "2px",
                                                    color:'#00629B'
                                                }}>
                                            </i>
                                            <span style={{ fontSize: "17px",color:'#00629B' }}>Utilization</span>
                                        </div>
                                    </span>
              </Link>

              <Link to='/login' style={{ textDecoration: 'none' }}>
                                    <span>
                                        <div 
                                           onClick={this.logout}
                                            className='sideLink' style={{marginTop:'40px'}}
                                            id="option6"
                                           >
                                              
                                            <i className="fad fa-sign-out-alt"
                                                style={{
                                                    fontSize: '20px',
                                                    marginRight: '10px',
                                                    marginTop: "2px",
                                                    color:'#00629B'
                                                }}>
                                            </i>
                                            <span style={{ fontSize: "17px",color:'#00629B' }}>Admin</span>
                                        </div>
                                    </span>
              </Link>
              <Link to='/example' style={{ textDecoration: 'none' }}>
                                    <span>
                                        <div 
                                         
                                            className='sideLink' style={{marginTop:'40px'}}
                                            id="option7"
                                           >
                                              
                                            <i className="fad fa-sign-out-alt"
                                                style={{
                                                    fontSize: '20px',
                                                    marginRight: '10px',
                                                    marginTop: "2px",
                                                    color:'#00629B'
                                                }}>
                                            </i>
                                            <span style={{ fontSize: "17px",color:'#00629B' }}>Admin</span>
                                        </div>
                                    </span>
              </Link>
        </div>
      </>
    )
  }
}

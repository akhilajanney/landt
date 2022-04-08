import React, { Component } from 'react'
import { sidelinkClicked } from '../leftsidebar/Leftsidebar';
import $ from 'jquery'

export default class Realtime extends Component {
  constructor(){
    super();
    this.state={
      message:'',
      success:false,
      error:false,
    }
  }
  componentDidMount(){
    sidelinkClicked('option2')
  }
  render() {
    const{message,error,success}=this.state;
    return (
        <>
          <>
      <div className='maindiv'>
        
      <div  style={{marginLeft:'35px'}}>
                <h1 style={{color:'#0000008f'}}>Real-Time Tracking</h1>
                <div style={{width:'50px',height:'5px',background:'#00629B',
                  marginTop:'-18px',borderRadius:'5px',marginBottom:'30px'}}>
                </div>


                
                </div>
                <div id="config_displayModal" className="modal">
          <div className="modal-content">
            <p id="content" style={{ textAlign: "center" }}></p>
            <button
              id="ok"
              className="btn-center btn success-btn"
              onClick={this.sessionTimeout}
            >
              OK
            </button>
          </div>
        </div>
      </div>
      
      </>
      </>
    )
  }
}

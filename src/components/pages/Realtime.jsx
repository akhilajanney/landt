import React, { Component } from 'react'

export default class Realtime extends Component {
  constructor(){
    super();
    this.state={
      message:'',
      success:false,
      error:false,
    }
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
      </div>
      
      </>
      </>
    )
  }
}

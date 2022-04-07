import React, { Component } from 'react'

export default class Utilize extends Component {
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
                <h1 style={{color:'rgb(136, 143, 159)'}}>Registration</h1>
                <div style={{width:'50px',height:'5px',background:'#00629B',
                marginTop:'-22px',borderRadius:'5px',marginBottom:'30px'}}>

                </div>
                </div>
                {error && (
            <div style={{ color: 'red' }}>
              <strong>{message}</strong>
            </div>
          )}

          {success && (
            <div style={{ color: 'green', }}>
              <strong>{message}</strong>
            </div>
          )}
      </div>
      
      </>
      </>
    )
  }
}

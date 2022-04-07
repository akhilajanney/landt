import React, { Component } from 'react'
import $ from 'jquery'

export default class Assetreg extends Component {
     // register = () => {
        constructor(){
            super();
            this.state={
              message:'',
              success:false,
              error:false,
            }
          }
    //     let data = {
    //         macid: $('#sensorid').val(),
    //         systemid: $('#systemname').val(),
    //         min: $('#min').val(),
    //         max: $('#max').val()
    //     }
    //     if (!$("#sensorid").val().match("([A-Za-z0-9]{2}[-]){5}([A-Za-z0-9]){2}")) {
    //         this.setState({error: true, message: 'Invalid Sensor ID'})
    //     } else if (data.macid !== "" && data.systemid !== "" && data.min !== "" && data.max !== '') {
    //         axios({method: 'POST', url: '/api/sensor/temperature', data: data}).then((response) => { // console.log(response);
    //             if (response.status === 200 || response.status === 201) {
    //                 this.setState({success: true, message: 'Sensor registered successfullyy'})
    //                 $('#sensorid').val('');
    //             } else if (response.status === 406) {
    //                 this.setState({success: true, message1: response.data.message})
    //             }
    //         }).catch((error) => { // console.log(error);
    //             if (error.response.status === 403) {
    //                 this.setState({error: true, message: 'Please Login Again'})
    //             } else if (error.response.status === 400) {
    //                 this.setState({error: true, message: 'Bad Request!'})
    //             }

    //         })
    //     } else {
    //         this.setState({error: true, message: 'Please Enter All Fields'})
    //     }

    //     remove = () => {
    //         let data = {
    //             macid: $('#id').val()
    //         }
    
    //         if (data.macid.match("([A-Za-z0-9]{2}[-]){5}([A-Za-z0-9]){2}")) {
    //             this.setState({error: true, message: 'Invalid Sensor ID'})
    //         } else if (data.macid !== '') {
    
    //             axios({method: 'DELETE', url: '/api/sensor/temperature', data: data}).then((response) => {
    //                 if (response.status === 200 || response.status === 201) {
    //                     this.setState({success: true, message: 'Sensor Removed Successfullyy'})
    //                     $('#id').val('');
    //                     $('#deletetag').hide();
    //                 }
    //             }).catch((error) => { // console.log(error);
    //                 if (error.response.status === 406) {
    //                     this.setState({error: true, message: 'Capacity Exceeded!'})
    //                 }
    
    //             })
    //         } else {
    //             this.setState({error: true, message: 'Enter Sensor ID'})
    //         }
    //     }
    // }
    hide = () => {
        document.getElementById("deletetag").style.display = $("#deletetag").css("display") === 'block' ? 'none' : 'block'
    }
  render() {
    const{message,error,success}=this.state;
    return (
      <div>
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
           <div className="inputdiv">
                            <span className="label">Asset Name :</span>
                            <input type="text" name="assetname" id="assetname" required="required" />
                        </div>

                        <div className="inputdiv">
                            <span className="label">Mac ID :</span>
                            <input type="text" name="assetid" id="assetid" required="required" placeholder='5a-c2-15-03-00-00'/>
                        </div>

                        <div className="inputdiv">
                            <span className="label">Shop Floor :</span>
                            <input type="text" name="flooor" id="floor" required="required"/>
                        </div>
                        <form id="empreg">
                        <div style={
                            {
                                display: 'flex',
                                marginTop: '55px',
                                marginLeft: '12px',
                                paddingBottom: '20px'
                            }
                        }>


                            <div className='remove'>
                                <div style={
                                        {
                                            marginLeft: '30px',
                                            marginTop: '5px',
                                            color: '#00629B',
                                            cursor: 'pointer',
                                            fontFamily: 'Poppins-Regular'
                                        }
                                    }
                                    onClick={
                                        this.hide
                                }>
                                    Remove 
                                </div>
                                <div>
                                    <i style={
                                            {
                                                fontSize: '20px',
                                                marginLeft: '10px',
                                                marginTop: '5px',
                                                color: '#00629B'
                                            }
                                        }
                                        className="fas fa-file-times"></i>
                                </div>
                            </div>
                            <div className='register'>
                                <div onClick={
                                        this.register
                                    }
                                    style={
                                        {
                                            marginLeft: '30px',
                                            marginTop: '5px',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontFamily: 'Poppins-Regular'
                                        }
                                }>
                                    Register 
                                </div>
                                <div>
                                    <i style={
                                            {
                                                fontSize: '20px',
                                                marginLeft: '10px',
                                                marginTop: '5px',
                                                color: 'white'
                                            }
                                        }
                                        className="fas fa-file-plus"></i>

                                </div>
                            </div>
                        </div>
                    </form>
                    <form id="deletetag"
                        style={
                            {
                                paddingBottom: '30px',
                                display: 'none'
                            }
                    }>
                        <div className="inputdiv">
                            <span className="label">Asset ID :</span>
                            <input type="text" name="id" id="id" required="required" />
                        </div>
                        <div className='delete'>
                            <div onClick={
                                    this.remove
                                }
                                style={
                                    {
                                        marginLeft: '30px',
                                        marginTop: '5px',
                                        color: '#00629B',
                                        fontFamily: 'Poppins-Regular'
                                    }
                            }>
                                Remove
                            </div>
                            <div>
                                <i style={
                                        {
                                            fontSize: '20px',
                                            marginLeft: '10px',
                                            marginTop: '5px',
                                            color: '#00629B'
                                        }
                                    }
                                    className="fas fa-file-times"></i>
                            </div>
                        </div>
                    </form>
      </div>
    )
  }
}

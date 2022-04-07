import React, { Component } from 'react'

export default class Alerts extends Component {
  constructor(){
    super();
    this.state={
      message:'',
      success:false,
      error:false,
    }
  }
  // alerts=()=>{
  //   axios({method:'GET',url:'/api/alert'})
  //   .then((response)=>{
  //     // console.log(response);
  //     let data=response.data;
  //     // console.log(data);
  //     $('#alert').empty();
  //   for(let i=0;i<data.length;i++){
  //     let lastseen=data[i].lastseen .substr(0, 10) +
  //   " " +
  //   data[i].lastseen.substr(11, 8);
    
  //   $('#alert').append(
  //     "<tr><td>" +
  //           (i + 1) +
  //           "</td><td>" +
  //            data[i].macid.macid+
  //           "</td><td>" +
  //           data[i].macid.systemid.name+
  //           "</td><td>" +
  //             data[i].value+
  //           "</td><td>" +
  //           lastseen+
  //           "</td></tr>"
  //   );
  //   }
  //   })
  //   .catch((error)=>{
  //     if(error.response.status===403){
  //       this.setState({error:true,message:'Please Login Again'})
  //     }else if(error.response.status===400){
  //       this.setState({error:true,message:'Bad Request!'})  
  //     } else if(error.response.status===404){
  //       this.setState({error:true,message:'No Alert Data Found For Sensors'})
  //     }
  //   })
  // }
  render() {
    const{message,error,success}=this.state;
    return (
        <>
      <div className='maindiv'>
            <div  style={{marginLeft:'35px'}}>
                <h1 style={{color:'#0000008f'}}>Alerts</h1>
                <div style={{width:'50px',height:'5px',background:'#00629B',
                marginTop:'-22px',borderRadius:'5px',marginBottom:'30px'}}>

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
                <div className="inputdiv">
                            <span className="label">Alert Type:</span>
                            <select name="sensortype" id="sensortype" required="required">
                                <option>Free Fall</option>
                                <option>No Activity</option>
                                <option value=""> Low Battery</option>
                                <option value="">Panic</option>

                            </select>
                        </div>
                <table style={{ marginTop: "30px" }}>
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>SENSOR MACID</th>
                    <th>ALERT TYPE</th>
                    <th>LAST SEEN</th>
                    
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5a-c2-15-03-00-01</td>
                    <td>A</td>
                    <td>22-05-2022</td>
                    
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5a-c2-15-03-00-01</td>
                    <td>A</td>
                    <td>22-05-2022</td>
                    
                  </tr>
                </thead>
                <tbody id="alert"></tbody>
              </table>
            </div>
      </div>
      </>
    )
  }
}

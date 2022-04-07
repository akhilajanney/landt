import React, { Component } from 'react'

export default class Health extends Component {
  constructor(){
    super();
    this.state={
      message:'',
      success:false,
      error:false,
    }
  }

//   systemHealth = () => {
//     axios({method: 'GET', url: '/api/sensor/temperature'}).then((response) => {
//         console.log(response);
//         let data = response.data;
//         let sno = 1;
//         $('#health').empty();
//         for (let i = 0; i < data.length; i++) {
//             for (let j = 0; j < data[i].sensors.length; j++) {
//                 let datas = data[i].sensors[j];
//                 let timestamp = datas.lastseen.substr(0, 10) + " " + datas.lastseen.substr(11, 8),
//                     status = 'red';
//                 if (new Date() - new Date(datas.lastseen) <= 2 * 60 * 1000) {
//                     status = "green";
//                 }
//                 $('#systemHealth').append("<tr><td>" + (
//                   sno
//                 ) + "</td><td>" + datas.macid + "</td><td>" + data[i].systemname + "</td><td>" + datas.battery + "</td><td>" + timestamp + "</td><td>" + "<div class='circle' style='margin:auto;background-color:" + status + ";'></div></td></tr>");
//                 sno+=1;

//               }
//         }
//     }).catch((error) => {
//       if(error.response.status===403){
//         this.setState({error:true,message:'Please Login Again'})
//       }else if(error.response.status===400){
//         this.setState({error:true,message:'Bad Request!'})
//       }
//     })
// }
  render() {
    const{message,error,success}=this.state;
    return (
        <>
      
      <div className='maindiv'>
            <div  style={{marginLeft:'35px'}}>
                <h1 style={{color:'#0000008f'}}>System Health</h1>
                <div style={{width:'73px',height:'5px',background:'#00629B',
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
                
                <table style={{ marginTop: "30px" }}>
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>ASSET MACID</th>
                    <th>ASSET TYPE</th>
                    <th>LAST SEEN</th>
                    <th>STATUS</th>
                    
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
                <tbody id="health"></tbody>
              </table>
            </div>
      </div>
     
      </>
    )
  }
}

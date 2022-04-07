import React, { Component } from 'react'
import $ from 'jquery'
import Employeereg from './Employeereg';
import Assetreg from './Assetreg';
import Utilizereg from './Utilizereg';

export default class Registration extends Component {
  List = [false, false,false];
  constructor(props) {
    super(props);
    this.state = {
      // flag: false,
    }
  }
    componentDidMount(){
        // sidelinkClicked('option1')
        this.setState({ flag: true })
        this.List[0] = true;
        $("#opt0").css({"background": "#00629B", "color": "white" });
      }

      optionChange = (e) => {
        $("#opt0").css({ "background": "none", "color": "#000" });
        $("#opt1").css({"background": "none", "color":"#000"});
        $("#opt2").css({"background": "none", "color":"#000"});
        this.setState({ flag: true })
        this.List = [false, false,false]
        let id = parseInt(e.target.id.substring(3))
        $("#" + e.target.id).css({ "background": "#00629B", "color": "white" });
        this.List[id] = true;
      }
  render() {
    return (
        <>
      <div className='maindiv'>
        
      <div  style={{marginLeft:'35px'}}>
                <h1 style={{color:'#0000008f'}}>Registration</h1>
                <div style={{width:'50px',height:'5px',background:'#00629B',
                marginTop:'-18px',borderRadius:'5px',marginBottom:'30px'}}>
                </div>
                <div className="container fading"
              style={{
                marginTop: "30px",marginLeft:'35px'
               
              }}>
              <div className="row"
                onClick={this.optionChange}>
                <button
                  id="opt0"
                  className='navbtn'
                >
                  Employee Registration
                </button>
                <button
                  id="opt1"
                  className='navbtn'
                >
                  Asset Registration
                </button>
                <button
                  id="opt2"
                  className='navbtn'
                >
                   Utilization Registration
                </button>
              </div>
              <div
              style={{marginLeft:'52px',marginTop:'85px'}}
                className="container"
                id="childComponent"
              >
                {this.List[0] && (< Employeereg/>)}
                {this.List[1] && (<Assetreg />)}
                {this.List[2] && (<Utilizereg />)}

              </div>
            </div>
                </div>
      </div>
      
      </>
    )
  }
}

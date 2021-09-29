
import React from "react";
class Timer extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    let color 
    if( this.props.time > 7){
      color = 'black'
    }else if(this.props.time > 3){
      color = 'yellow'
    }
    else{
      color = 'red'
    }
    return (<div className="columns mt-2">
            <div className="column col-12" >
                <div style={{color : color}}>{this.props.etat ?  this.props.time : '' }</div>
            </div>
        </div>);
   }  
}
export default Timer
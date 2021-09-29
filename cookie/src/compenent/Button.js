
import React from "react";
class Button extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {

    
    return (<div className="columns mt-2">
            <div className="column col-12">
                <button>{this.props.etat ? 'CLICK!!' : 'start'}</button>
            </div>
        </div>);
   }  
}
export default Button
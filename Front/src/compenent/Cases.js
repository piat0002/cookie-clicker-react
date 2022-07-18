import React from "react";
class Cases extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  //pas opti faudrait voir comment mettre une div en mode aléatoire
  render() {
    var places = [0,1,2,3,4,5,6,7,8]
    var cookie = <img  onClick={this.props.clickcookie} draggable="false" pointer-events="none" src="/PerfectCookie.png"  className="img-responsive noselect" alt="cookie"/> 
    return (
    

    
    
    
    
    <div className="columns mt-2" id="tabcookie">
          {places.map((place) => (
      <div className="column col-4">{this.props.cookiePlace === place ? cookie : ''}</div>
    ))}
    </div>);
   }
}

export default Cases;


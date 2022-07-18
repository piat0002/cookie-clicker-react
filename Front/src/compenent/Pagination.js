
import React from "react";
class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joueurs : [],
      page: "1",
      charge: false,
      error:false
    }
  }
  //useeffect???
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/hall_of_fames?page=" + this.state.page)
    .then(res => res.json())
    .then(data => {//console.log(data)
        this.setState(state=>({joueurs : data["hydra:member"],charge:true}))})
    .catch(error => {this.setState(state =>({charge:true,error:true}))})
  }


  render() {
    let contenu = <tbody><div class="loading loading-lg"></div></tbody>;        


    
    return (
      <table className="table">
        <thead>
          <tr className="text-secondary">
            <th className="text-center" colSpan="3">Tableau des scores</th>
          </tr>
          <tr className="text-secondary">
            <th>Pseudo</th>
            <th>Score</th>
            <th>Mode</th>
          </tr>
        </thead>
        {contenu}
      </table>);
   }  
}
export default Pagination
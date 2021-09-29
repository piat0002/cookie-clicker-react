
import React from "react";
class HallOfFame extends React.Component {
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
    .catch(error => {
      console.log(error)
      this.setState(state =>({charge:true,error:true}))})
  }


  render() {
    let contenu = <tbody><tr><td colSpan='3'><div class="loading loading-lg  bg-secondary"></div></td></tr></tbody>;        
    if(this.state.error){
      contenu = <tbody><tr><td colSpan='3'>une error est survenu lors du chargement du score</td></tr></tbody>
    }
    else if(this.state.charge){

      contenu = <tbody>
      {this.state.joueurs.map(joueur=> (<tr><td>{joueur.pseudo}</td><td>{joueur.score}</td><td>{joueur.difficult === 1 ? 'facile': 'difficile'}</td></tr>))}
     </tbody>
    }

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
export default HallOfFame
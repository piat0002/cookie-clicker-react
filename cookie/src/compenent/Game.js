import React from "react";
import Cases from "./Cases"
import Button from "./Button";
import Timer from "./Timer";
import ModalShare from "./ModalShare";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {etat : false,
    difficulty : 1,
    clickCount : 0,
    time : 15,
    cookiePlace: 4,
    modalShare: ""}
    this.clickcookie = this.clickcookie.bind(this);
    this.reset = this.reset.bind(this)
    this.changedifficulty = this.changedifficulty.bind(this)
    this.changeModalShare = this.changeModalShare.bind(this)
    this.tick = this.tick.bind(this)
  }
  changedifficulty(){
    if (!this.state.etat){
      if(this.state.difficulty === 1){
        this.setState( state=>({ difficulty : 2}))  
      }
      else{
        this.setState( state=>({ difficulty : 1}))
      }
    }
  }
  

  clickcookie(){
    if (this.state.etat){
      this.setState( state=>({clickCount : state.clickCount += 1}))
      if(this.state.difficulty === 2){
        this.setState( state=>({cookiePlace : Math.floor(Math.random()*9)}))
      }
    }
    
  }


  reset(){
    if(!this.state.etat){
      this.setState( state=>({clickCount : 0, etat : true, time : 15}))
    }
    if(this.state.difficulty === 1){
      this.setState( state=>({cookiePlace : 4}))
    }
  }

  changeModalShare(){
    this.setState(state=>({
      modalShare: state.modalShare === "" ? 'active': '' 
    }))
  }

  //pour timer 
  /*
  tick() {
    if(this.state.time === 0 ){
      if (this.state.etat){
        this.changeModalShare()
      }
      this.setState( state=>({etat : false}))
      
    }
    else if(this.state.etat){
      this.setState(state => ({
        time: state.time - 1
      }));
        setTimeout(()=> {this.tick()} ,100000000)
    }
   

    
  }
  */
  // il faut changer car pas optimiser mais delie de flemme de changer le mieux c'est de faire avec une fonction recursive comme angular
   tick() {
     if (this.state.etat){
      this.setState(state => ({
        time: state.time - 1
      }));
   
      if(this.state.time === 0 ){
        if (this.state.etat){
          this.changeModalShare()
        }
        this.setState( state=>({etat : false}))
    }
      }
  }

  componentDidMount() {
     this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (
    <div className="game">
      <button onClick={this.changedifficulty}>{this.state.difficulty === 1 ? 'facile' : 'difficile' }</button>
      <Cases clickcookie={this.clickcookie} cookiePlace={this.state.cookiePlace}></Cases>
      <Timer etat={this.state.etat} time={this.state.time}></Timer>
      <div onClick={this.reset}>
        <Button etat={this.state.etat}></Button>
      </div>
      <div>score:{this.state.clickCount}</div>
      <ModalShare clickCount={this.state.clickCount} difficulty={this.state.difficulty} active={this.state.modalShare} changeModalShare={()=>{this.changeModalShare('2')}}></ModalShare>
    </div>);
   }
}

export default Game;
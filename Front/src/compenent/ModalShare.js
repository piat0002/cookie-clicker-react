
import React from "react"

class ModalShare extends React.Component {
    constructor(props) {
        super(props);
        this.envoiDuScore = this.envoiDuScore.bind(this) 
        this.state = {
            myInputValue : ""
          }
      }

    


    envoiDuScore(pseudo){
        let header = {
            method: 'post',
            headers: new Headers({"Content-Type": 'application/json','accept': 'application/ld+json'}),
            body: JSON.stringify({"pseudo":pseudo,"score":this.props.clickCount,"difficult":this.props.difficulty})
        }
        fetch('http://localhost:8000/api/hall_of_fames',header)
            .then(res=>{
                this.props.changeModalShare()
                console.log(res)})
            .catch(error=>console.log(error))
    }

    render(){
        var classOfC = "modal " + this.props.active

        
        return (
            <div className={classOfC} id="modal-share">
                <a href="#close" className="modal-overlay" ></a>
                <div className="modal-container">
                    <div className="modal-header">
                        <a id="close-modal-share" href="#close" className="btn btn-clear float-right" aria-label="Close" onClick={this.props.changeModalShare}></a>
                    <div className="modal-title h5" >Game over</div>
                    </div>
                    <div className="modal-body active">
                        <div className="content">
                            <p>
                                <img src="/GrandmaIconLarge.png" alt="Grandma" />
                                <span id="click-count">{this.props.clickCount}</span> clicks in 15 seconds, not that bad kid!
                            </p>
                            <div id="subnick">
                                Nickname: 
                                <input className="nickname" type="text" placeholder="Nickname" margin-bottom="10px" value={this.state.myInputValue}  onChange={e => this.setState({myInputValue: e.target.value})}/>
                                <div className="col-4 col-mx-auto"><button class="btn btn-primary" onClick={()=>{this.envoiDuScore(this.state.myInputValue)}}>Send Nickname</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalShare;
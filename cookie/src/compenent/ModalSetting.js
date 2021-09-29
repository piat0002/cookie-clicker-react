import React from "react"
class ModalSetting extends React.Component {
      constructor(props) {
    super(props);
  }
    render(){
        return (
        <div class="modal">
            <div class="modal-container">
                <div class="modal-header">
                    <a id="close-modal-settings" href="#close" class="btn btn-clear float-right" aria-label="Close" onClick={()=>{this.props.close()}}></a>
                    <div class="modal-title h5">Settings</div>
                </div>
            </div>
            <div class="modal-body">
                <div class="content">
                    <div class="form-group">
                        <label class="form-label">Background</label>
                        <input class="form-input" type="color"/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
if(!this.state.error && this.state.charge){
    contenu = <tbody>
    {this.state.joueurs.map(joueur=> (<tr><td>{joueur.pseudo}</td><td>{joueur.score}</td><td>{joueur.difficult === 1 ? 'facile': 'difficile'}</td></tr>))}
    </tbody>
  }
export default ModalSetting;
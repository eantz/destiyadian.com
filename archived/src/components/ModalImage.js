import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

class ModalImage extends React.Component {
  constructor() {
    super();

    this.state = {
      modalOpen: true
    }

    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({modalOpen: nextProps.showModal})
  }

  handleRequestClose() {
    this.setState({modalOpen: false});
  }

  render () {
    const props = {...this.props}

    return (
      <ReactModal className="modal-image"
        isOpen={this.state.modalOpen} 
        shouldCloseOnEsc={true} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={this.handleRequestClose} >

        <div className="modal-close">
          <span onClick={this.handleRequestClose}>[x] close</span>
        </div>

        <img src={`/images/${props.image.full}`} alt="full" />

      </ReactModal>
    )
  }

  
}

export default ModalImage;
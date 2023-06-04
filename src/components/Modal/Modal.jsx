import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalBody } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  // життєвий цикл, викликається після монтування компонента
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  // життєвий цикл, викликається перед розмонтуванням компонента
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);  
  }
  // закриття модального вікна -Escape
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  // закриття модального вікна натисканням на фон
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props; 

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalBody>
          <img src={largeImageURL} alt={tags} />
        </ModalBody>
      </Overlay>,
      modalRoot 
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

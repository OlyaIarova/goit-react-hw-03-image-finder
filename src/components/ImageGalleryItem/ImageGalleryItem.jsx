import React, { Component } from 'react';
import PropTypes from "prop-types";
import Modal from '../Modal/Modal';
import {
  ImageGalleryItemWrp,
  ImageGalleryItemImage,
} from "./ImageGalleryItem.styled.jsx";

 class ImageItem extends Component {
   state = {
     showModal: false,
   };
   handleToggleModal = () => {
     this.setState(prevState => ({
       showModal: !prevState.showModal,
     }));
   };
   render() {
     const { showModal } = this.state;
     const { tags, webformatURL, largeImageURL } = this.props.image;
     return (
       <>
         <ImageGalleryItemWrp>
           <ImageGalleryItemImage
             onClick={this.handleToggleModal}
             src={webformatURL}
             alt={tags}
           />
         </ImageGalleryItemWrp>
         {showModal && (
           <Modal
             onClose={this.handleToggleModal}
             largeImageURL={largeImageURL}
           />
         )}
       </>
     );
   }
 }
 

ImageItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
export default ImageItem;

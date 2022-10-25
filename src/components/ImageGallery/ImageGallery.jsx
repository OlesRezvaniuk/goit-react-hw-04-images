import { ImageGalleryItem } from './Item/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ onArray, onHandleModalOpen }) => {
  return (
    <div className={s.gallery}>
      <ImageGalleryItem
        onArrayX={onArray}
        onHandleModalOpenX={onHandleModalOpen}
      />
    </div>
  );
};

ImageGallery.propTypes = {
  onArray: PropTypes.array.isRequired,
  onHandleModalOpen: PropTypes.func.isRequired,
};

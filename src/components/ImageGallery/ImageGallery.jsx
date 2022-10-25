import { ImageGalleryItem } from './Item/ImageGalleryItem';
import s from './ImageGallery.module.css';

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

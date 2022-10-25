import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ onArray, onHandleModalOpen }) => {
  return (
    <div
      style={{
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '15px',
        margin: '15px',
        display: 'grid',
      }}
      className="gallery"
    >
      <ImageGalleryItem
        onArrayX={onArray}
        onHandleModalOpenX={onHandleModalOpen}
      />
    </div>
  );
};

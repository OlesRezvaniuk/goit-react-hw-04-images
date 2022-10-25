import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ onArrayX, onHandleModalOpenX }) => {
  return onArrayX.map(item => (
    <div className={s.galleryItem__box} key={item.id}>
      <a
        onClick={onHandleModalOpenX}
        style={{ display: 'flex', height: '100%' }}
        className={s.galleryItem__link}
        href={item.largeImageURL}
      >
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className="gallery__image"
          src={item.webformatURL}
          alt={item.tags}
        />
      </a>
    </div>
  ));
};

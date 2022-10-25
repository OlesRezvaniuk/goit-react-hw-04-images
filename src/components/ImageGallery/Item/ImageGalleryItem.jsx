import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ onArrayX, onHandleModalOpenX }) => {
  return onArrayX.map(item => (
    <div className={s.galleryItem__box} key={item.id}>
      <a
        onClick={onHandleModalOpenX}
        className={s.galleryItem__link}
        href={item.largeImageURL}
      >
        <img
          className={s.galleryItem__img}
          src={item.webformatURL}
          alt={item.tags}
        />
      </a>
    </div>
  ));
};

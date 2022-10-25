import s from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ onBdClick, onLargeImg, onWord }) => {
  return (
    <div onClick={onBdClick} className={s.backdrop}>
      <div className={s.modal}>
        <img
          className={s.modal__img}
          src={onLargeImg}
          alt={onWord}
          loading="lazy"
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onBdClick: PropTypes.bool.isRequired,
  onLargeImg: PropTypes.string.isRequired,
  onWord: PropTypes.string.isRequired,
};

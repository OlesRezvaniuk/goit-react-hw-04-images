import s from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onSetPage, onPage, onTotalHits }) => {
  const onShowMore = () => {
    if (onPage < onTotalHits / 12) {
      onSetPage(onPage + 1);
    }
    setTimeout(() => {
      window.scrollBy({
        top: (0, 2000),
        behavior: 'smooth',
      });
    }, 750);
  };

  return (
    <div className={s.pageBtn}>
      <button className={s.button} type="button" onClick={onShowMore}>
        <span className={s.pageBtn__nmb}>Show more</span>
      </button>
    </div>
  );
};

Button.propTypes = {
  onSetPage: PropTypes.func.isRequired,
  onPage: PropTypes.number.isRequired,
};

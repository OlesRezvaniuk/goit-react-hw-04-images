import s from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onShowMore }) => {
  return (
    <div className={s.pageBtn}>
      <button className={s.button} type="button" onClick={onShowMore}>
        <span className={s.pageBtn__nmb}>Show more</span>
      </button>
    </div>
  );
};

Button.propTypes = {
  onShowMore: PropTypes.func.isRequired,
};

import s from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onPage, onShowMore }) => {
  return (
    <div className={s.pageBtn}>
      <button type="button" onClick={onShowMore}>
        <span className={s.pageBtn__nmb}>{onPage}</span>
      </button>
    </div>
  );
};

Button.propTypes = {
  onPage: PropTypes.number.isRequired,
  onPageI: PropTypes.func.isRequired,
  onPageD: PropTypes.func.isRequired,
};

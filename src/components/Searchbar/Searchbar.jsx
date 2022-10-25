import s from './SearchBar.module.css';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSearch, onWord, onInputChange }) => {
  return (
    <form className={s.searchBar} onSubmit={onSearch}>
      <div className={s.searchBar__box}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={onWord}
          onChange={onInputChange}
          className={s.searchBar__input}
        />
        <button className={s.searchBar__button} type="submit">
          <img
            className={s.searchBar__img}
            src="https://cdn-icons-png.flaticon.com/512/2866/2866321.png"
            alt="search-button"
          />
        </button>
      </div>
    </form>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onWord: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

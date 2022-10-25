import s from './Button.module.css';

export const Button = ({ onPage, onPageI, onPageD }) => {
  return (
    <div className={s.pageBtn}>
      {onPage > 1 && (
        <button className={s.pagBtn__arrow} type="button" onClick={onPageD}>
          <img
            loading="lazy"
            style={{ height: '14px', display: 'block', margin: 'auto' }}
            src="https://www.svgrepo.com/show/50827/left-arrow.svg"
            alt=""
          />
        </button>
      )}

      <span className={s.pageBtn__nmb}>{onPage}</span>

      {onPage === 42 || (
        <button className={s.pagBtn__arrow} type="button" onClick={onPageI}>
          <img
            style={{
              height: '14px',
              display: 'block',
              margin: 'auto',
              transform: 'scale(-1, 1)',
            }}
            src="https://www.svgrepo.com/show/50827/left-arrow.svg"
            alt=""
          />
        </button>
      )}
    </div>
  );
};

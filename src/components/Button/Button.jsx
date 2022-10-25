export const Button = ({ onPage, onPageI, onPageD }) => {
  return (
    <div
      className="page__button"
      style={{
        display: 'inline-flex',
        backgroundColor: 'rgb(20 38 66)',
        padding: '5px',
        borderRadius: '4px',
        position: 'sticky',
        bottom: '30px',
      }}
    >
      {onPage > 1 && (
        <button
          style={{ display: 'block', marginLeft: 'auto' }}
          type="button"
          onClick={onPageD}
        >
          <img
            loading="lazy"
            style={{ height: '14px', display: 'block', margin: 'auto' }}
            src="https://www.svgrepo.com/show/50827/left-arrow.svg"
            alt=""
          />
        </button>
      )}

      <span style={{ margin: '0px 10px' }}>{onPage}</span>

      {onPage === 42 || (
        <button
          style={{
            display: 'block',
            marginRight: 'auto',
          }}
          type="button"
          onClick={onPageI}
        >
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

export const Modal = ({ onBdClick, onLargeImg, onWord }) => {
  return (
    <div
      onClick={onBdClick}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        margin: 'auto',
        backgroundColor: '#0000002b',
        top: '0',
        left: '0',
        zIndex: '9',
      }}
      className="overlay"
    >
      <div
        style={{
          // height: '75%',
          // width: '75%',
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
        }}
        className="modal"
      >
        <img
          style={{ width: '100%' }}
          src={onLargeImg}
          alt={onWord}
          loading="lazy"
        />
      </div>
    </div>
  );
};

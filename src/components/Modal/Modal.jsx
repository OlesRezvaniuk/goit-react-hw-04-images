export const Modal = ({}) => {
  return (
    <div
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
      class="overlay"
    >
      <div
        style={{
          height: '75%',
          width: '75%',
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
        }}
        class="modal"
      >
        <img src="" alt="" />
      </div>
    </div>
  );
};

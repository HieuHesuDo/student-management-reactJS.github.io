export default function Modal({ message, confirmDelete, cancleDelete }) {
  return (
    <div className="bodyOverlay">
      <div className="modalContainer">
        <h1>{message}</h1>
        <div className="modalButton">
          <button className="confirm" type="button" onClick={confirmDelete}>
            Yes
          </button>
          <button className="cancel" type="button" onClick={cancleDelete}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

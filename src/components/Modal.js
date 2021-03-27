export default function Modal({ message,confirmDelete,cancleDelete }) {
    return (
      <div className="bodyOverlay">
        <div className="modalContainer">
            <h1>Bạn có chắc?</h1>
            <div className="modalButton">
            <button type="button" onClick={confirmDelete}>OK</button>
            <button type="button" onClick={cancleDelete}>Cancel</button>
            </div>
        </div>
        </div>
    );
  }
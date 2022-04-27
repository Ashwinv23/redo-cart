import React from "react";

const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h3>Are you sure ?</h3>
        <div className="btn-cont">
          <button>CONFIRM</button>
          <button>CANCEL</button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;

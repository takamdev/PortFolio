import React from "react";

function Modal({ text, title }) {
   return (
      <div
         className="modal   fade"
         id="ModalExample"
         tabIndex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
      >
         <div className="modal-dialog  modal-dialog-centered modal-lg">
            <div className=" serviceModal modal-content ">
               <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                     {title}
                  </h1>
                  <button
                     type="button"
                     className="btn-close"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                  ></button>
               </div>
               <div className="modal-body">{text}</div>
            </div>
         </div>
      </div>
   );
}

export default Modal;

import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export class MyModal extends Component {
  state = {
    show: false,
  };

  render() {
    const handleClose = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });

    const { header = "", buttonName = "more", children } = this.props;
    const { show } = this.state;
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          {buttonName}
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{header}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

// export class Modal extends Component {
//   render() {
//     const { header = "", buttonName = "more", children, modalId } = this.props;

//     const new_modalId = "m" + modalId.toString();

//     const modalRef = "#" + new_modalId;

//     return (
//       <div>
//         <button
//           type="button"
//           class="btn btn-primary"
//           data-toggle="modal"
//           data-target={modalRef}
//         >
//           {buttonName}
//         </button>

//         <div
//           class="modal fade"
//           id={new_modalId}
//           tabindex="-1"
//           role="dialog"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           <div class="modal-dialog" role="document">
//             <div class="modal-content">
//               <div class="modal-header">
//                 <h5 class="modal-title" id="exampleModalLabel">
//                   {header}
//                 </h5>
//                 <button
//                   type="button"
//                   class="close"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   {/* for close button */}
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div class="modal-body">{children}</div>
//               {/* <div class="modal-footer">
//                 <button
//                   type="button"
//                   class="btn btn-secondary"
//                   data-dismiss="modal"
//                 >
//                   Close
//                 </button>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default MyModal;

import React, { Component } from "react";

export class Modal extends Component {
  render() {
    const { header, buttonName, children, modalId } = this.props;

    const modalRef = "#" + modalId;

    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target={modalRef}
        >
          {buttonName}
        </button>

        <div
          class="modal fade"
          id={modalId}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {header}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  {/* for close button */}
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">{children}</div>
              {/* <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

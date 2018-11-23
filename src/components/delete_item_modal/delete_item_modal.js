import React, { PureComponent } from "react";
import "./delete_item_modal.scss";

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  render() {
    return (
      <div className="ttr-modal_wrapper">
        <div className="ttr-modal">
          <div className="ttr-modal-main_block">
            <div className="ttr-modal-title">
              Are you sure you want to delete this item?
            </div>
          </div>
          <div className="ttr-modal-buttons_block">
            <div
              className="ttr-modal-button"
              onClick={() => {
                this.props.closeAction();
              }}
            >
              No
            </div>
            <div
              className="ttr-modal-button"
              onClick={() => {
                this.props.deleteAction();
              }}
            >
              Yes
            </div>
          </div>
        </div>
      </div>
    );
  }
}

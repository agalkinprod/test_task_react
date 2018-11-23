import React, { PureComponent } from "react";
import "./edit_text_modal.scss";

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
            <div className="ttr-modal-title">Enter new text value:</div>
            <input
              className="ttr-modal-input"
              onChange={e => {
                this.setState({ text: e.target.value });
              }}
              onKeyPress={e => {
                if (event.key == "Enter") {
                  this.props.saveAction(this.state.text);
                }
              }}
            />
          </div>
          <div className="ttr-modal-buttons_block">
            <div
              className="ttr-modal-button"
              onClick={() => {
                this.props.closeAction();
              }}
            >
              Cancel
            </div>
            <div
              className="ttr-modal-button"
              onClick={() => {
                this.props.saveAction(this.state.text);
              }}
            >
              Save
            </div>
          </div>
        </div>
      </div>
    );
  }
}

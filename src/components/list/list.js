import React, { PureComponent } from "react";
import "./list.scss";
import ListItem from "../list_item/list_item.js";
import EditTextModal from "../edit_text_modal/edit_text_modal.js";
import DeleteItemModal from "../delete_item_modal/delete_item_modal.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getListItems,
  editListItem,
  deleteListItem
} from "../../actions/list_actions.js";

class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      edit_modal_state: false,
      delete_modal_state: false,
      active_item: {}
    };
  }
  componentDidMount() {
    this.props.getListItems();
  }

  render() {
    return (
      <div className="ttr-list-wrapper">
        {this.state.edit_modal_state ? (
          <EditTextModal
            closeAction={() => {
              this.setState({ edit_modal_state: false });
            }}
            saveAction={text => {
              this.props.editListItem({
                ...this.state.active_item,
                text
              });
              this.setState({ edit_modal_state: false });
            }}
          />
        ) : null}
        {this.state.delete_modal_state ? (
          <DeleteItemModal
            closeAction={() => {
              this.setState({ delete_modal_state: false });
            }}
            deleteAction={() => {
              this.props.deleteListItem(this.state.active_item.id);
              this.setState({ delete_modal_state: false });
            }}
          />
        ) : null}
        <div className="ttr-list">
          {this.props.list_items.map((item, index) => (
            <ListItem
              id={item.id}
              is_selected={item.is_selected}
              text={item.text}
              key={`list_item_${index}`}
              editTextAction={() => {
                this.setState({ edit_modal_state: true, active_item: item });
              }}
              deleteAction={() => {
                this.setState({ delete_modal_state: true, active_item: item });
              }}
              selectAction={() => {
                this.props.editListItem({
                  ...item,
                  is_selected: !item.is_selected
                });
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

List.defaultProps = {
  list_items: []
};

const mapStateToProps = state => {
  return {
    list_items: state.listReducer.list_items
  };
};

const mapDispatchToProps = dispatch => ({
  getListItems: bindActionCreators(getListItems, dispatch),
  editListItem: bindActionCreators(editListItem, dispatch),
  deleteListItem: bindActionCreators(deleteListItem, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

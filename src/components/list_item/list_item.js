import React, { Component } from "react";
import "./list_item.scss";
import Checkbox from "../checkbox/checkbox.js";

const ListItem = ({
  is_selected,
  text,
  editTextAction,
  deleteAction,
  id,
  selectAction
}) => (
  <div className="ttr-list_item">
    <Checkbox
      state={is_selected}
      onClick={() => {
        selectAction({ id });
      }}
    />
    <div className="ttr-list_item-text"> {text} </div>
    <div className="ttr-list_item-action" onClick={() => editTextAction()}>
      {" "}
      <img src="https://icongr.am/fontawesome/pencil.svg?size=22&color=000000" />{" "}
    </div>
    <div className="ttr-list_item-action" onClick={() => deleteAction({ id })}>
      {" "}
      <img src="https://icongr.am/fontawesome/trash.svg?size=22&color=000000" />{" "}
    </div>
  </div>
);

export default ListItem;

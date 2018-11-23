import listReducer from '../../src/reducers/list_reducer';
import {
    SET_LIST_ITEMS,
    EDIT_LIST_ITEM,
    DELETE_LIST_ITEM
} from '../../src/actions/types';

describe('list_reducer', () => {

  const list_items_mock = [
    { id: 0, text: 'first', is_selected: false },
    { id: 1, text: 'second', is_selected: true },
    { id: 2, text: 'third', is_selected: false }
  ];

  it('should return proper default state', () => {
    const action = { type: 'not_existing_action' };
    expect(listReducer(undefined, action)).toMatchSnapshot();
  });

  it('should set list items', () => {
    const action = { type: SET_LIST_ITEMS, payload: list_items_mock };
    expect(listReducer(undefined, action)).toMatchSnapshot();
  });

  it('should edit list items', () => {
    const updated_list_item = { id: 1, text: 'second', is_selected: false };
    const action = { type: EDIT_LIST_ITEM, payload: updated_list_item };
    expect(listReducer({ list_items: list_items_mock }, action)).toMatchSnapshot();
  });

  it('should delete list item', () => {
    const id_to_delete = 1;
    const action = { type: DELETE_LIST_ITEM, payload: id_to_delete };
    expect(listReducer({ list_items: list_items_mock }, action)).toMatchSnapshot();
  });

});
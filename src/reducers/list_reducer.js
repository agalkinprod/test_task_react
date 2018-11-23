import _ from 'lodash';
import {
    SET_LIST_ITEMS,
    EDIT_LIST_ITEM,
    DELETE_LIST_ITEM
} from '../actions/types';

const default_state = {
  list_items: []
};

export default (state = default_state, action) => {
  switch (action.type) {
    case SET_LIST_ITEMS: {
      return {
        ...state,
        list_items: _.sortBy(
          action.payload,
          'id'
        )
      };
    }
    case EDIT_LIST_ITEM: {
      const new_list_items = [
        ..._.filter(
          state.list_items,
          item => item.id !== action.payload.id),
        action.payload
      ];
      return {
        ...state,
        list_items: _.sortBy(new_list_items, 'id')
      };
    }
    case DELETE_LIST_ITEM: {
      const new_list_items = [...state.list_items];
      _.remove(new_list_items, { id: action.payload });
      return {
        ...state,
        list_items: _.orderBy(new_list_items, 'id')
      };
    }
    default: {
      return state;
    }
  }
};

import { get } from '../utils/fetcher.js';
import { SET_LIST_ITEMS, EDIT_LIST_ITEM, DELETE_LIST_ITEM } from './types';

export function getListItems() {
	return dispatch => {
		get('/../../public/mocks/mock_items.json').then(response => {
			//console.log("items response", response);
			dispatch({
				type: SET_LIST_ITEMS,
				payload: response.list_items
			});
		});
	};
}

export function editListItem({ id, text, is_selected }) {
	return {
		type: EDIT_LIST_ITEM,
		payload: { id, text, is_selected }
	};
}
export function deleteListItem(id) {
	return {
		type: DELETE_LIST_ITEM,
		payload: id
	};
}

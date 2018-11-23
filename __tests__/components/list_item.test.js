import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import jest from 'jest-mock';

import ListItem from "../../src/components/list_item/list_item";

describe('<ListItem />', () => {
  describe('render()', () => {

    it('should render the component', () => {
      const wrapper = mount(<ListItem
        id={1}
        text={'test'}
        editTextAction={jest.fn()}
        deleteAction={jest.fn()}
        is_selected={false}
        selectAction={jest.fn()}
      />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should contain a checkbox', () => {
      const wrapper = mount(<ListItem
        id={1}
        text={'test'}
        editTextAction={jest.fn()}
        deleteAction={jest.fn()}
        is_selected={false}
        selectAction={jest.fn()}
      />);
      expect(wrapper.find('.ttr-checkbox-circle_unchecked').length).toEqual(1);
    });

    it('should contain control buttons', () => {
      const wrapper = mount(<ListItem
        id={1}
        text={'test'}
        editTextAction={jest.fn()}
        deleteAction={jest.fn()}
        is_selected={false}
        selectAction={jest.fn()}
      />);
      expect(wrapper.find('.ttr-list_item-action').length).toEqual(2);
    });

    it('should react to select checkbox click', () => {
      const mockOnSelect = jest.fn();
      const wrapper = mount(<ListItem
        id={1}
        text={'test'}
        editTextAction={jest.fn()}
        deleteAction={jest.fn()}
        is_selected={false}
        selectAction={mockOnSelect}
      />);
      wrapper.find('.ttr-checkbox-circle_unchecked').simulate('click');
      expect(mockOnSelect.mock.calls.length).toEqual(1);
    });

    it('should react to edit button click', () => {
      const mockOnEdit = jest.fn();
      const wrapper = mount(<ListItem
        id={1}
        text={'test'}
        editTextAction={mockOnEdit}
        deleteAction={jest.fn()}
        is_selected={false}
        selectAction={jest.fn()}
      />);
      wrapper.find('.ttr-list_item-action').at(0).simulate('click');
      expect(mockOnEdit.mock.calls.length).toEqual(1);
    });

    it('should react to delete button click', () => {
      const mockOnDelete = jest.fn();
      const wrapper = mount(<ListItem
        id={1}
        text={'test'}
        editTextAction={jest.fn()}
        deleteAction={mockOnDelete}
        is_selected={false}
        selectAction={jest.fn()}
      />);
      wrapper.find('.ttr-list_item-action').at(1).simulate('click');
      expect(mockOnDelete.mock.calls.length).toEqual(1);
    });

  });
});
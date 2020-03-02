import renderer from 'react-test-renderer';
import React from 'react';
import FormAdd from '../../components/users/userAdd'

it('Verify if form renders correctly', () => {
  const tree = renderer
    .create(
      <FormAdd>
        <label></label>
        <input />
        <label></label>
        <input />
        <label></label>
        <input />
        <label></label>
        <input />
      </FormAdd>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

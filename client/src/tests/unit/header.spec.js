import renderer from 'react-test-renderer';
import React from 'react';
import Header from '../../components/interfaces/header'

it('Verify if header renders correctly', () => {
  const tree = renderer
    .create(<Header><h1></h1></Header>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

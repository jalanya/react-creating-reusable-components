import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';

test('hide password quality by default', () => {
  const tree = renderer.create(<PasswordInput
    htmlId="test"
    name="test"
    onChange={() => {}}
    value="Uisi38#8iad" />).toJSON();
  expect(tree).toMatchSnapshot();
});

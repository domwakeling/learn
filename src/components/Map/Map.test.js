/* global expect */

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Map from './Map';
import mockNodes from '../../__mocks__/map-nodes';

Enzyme.configure({ adapter: new Adapter() });
const renderer = new ShallowRenderer();

test('<Map /> snapshot', () => {
  const component = renderer.render(<Map nodes={mockNodes} />);
  expect(component).toMatchSnapshot('Map');
});

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow } from 'enzyme';

import HomeRoute from '../HomeRoute';

describe.skip('<HomeRoute />', () => {
  test('renders', () => {
    const wrapper = shallow(<HomeRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});

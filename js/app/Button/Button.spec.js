import React from 'react';
import { test } from 'ava';
import { shallow } from 'enzyme';
import { ButtonTest } from './Button.jsx';

test('has .button has wrapping class', (t) => {
  const wrapper = shallow(<ButtonTest />);
  t.is(wrapper.find('.button').length, 1);
});
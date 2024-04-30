/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/core/app';
import {render} from '@testing-library/react-native';



describe('App', () => {
  it('should renders correctly', () => {
    render(<App />);
  });
});

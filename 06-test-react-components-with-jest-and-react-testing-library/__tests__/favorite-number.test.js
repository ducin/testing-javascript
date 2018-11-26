import 'jest-dom/extend-expect';
import React from 'react';
import ReactDOM from 'react-dom';
import {fireEvent, render} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import {FavoriteNumber} from '../src/favorite-number';

describe('FavoriteNumber', () => {
  test('renders a number input with a label "Favorite Number"', () => {
    const {debug, getByLabelText} = render(<FavoriteNumber />);
    const input = getByLabelText(/favorite number/i);

    debug();

    expect(input).toHaveAttribute('type', 'number');
  });

  test('enterering an invalid value shows an error message', () => {
    const {debug, queryByTestId, getByLabelText} = render(<FavoriteNumber />);
    debug();
    const input = getByLabelText(/favorite number/i);

    expect(queryByTestId('error-message')).toBeFalsy();

    fireEvent.change(input, {target: {value: 10}});

    expect(queryByTestId('error-message')).toBeTruthy();
    debug();
  });
});
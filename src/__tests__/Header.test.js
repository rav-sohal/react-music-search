import {render, screen} from '@testing-library/react';
import {create} from 'react-test-renderer';
import Header from '../components/Header';

describe ('Header.js tests', () => {
  test ('Snapshot test of Header', () => {
    const testHeaderSnapshot = create (<Header />).toJSON ();
    expect (testHeaderSnapshot).toMatchSnapshot ();
  });
});
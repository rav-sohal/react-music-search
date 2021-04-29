import {render, screen} from '@testing-library/react';
import {create} from 'react-test-renderer';
import App from '../App';

describe ('App.js tests', () => {

  test ('renders Search iTunes Music', () => {
    render (<App />);
    const titleElement = screen.getByText (/Search iTunes Music/i);
    expect (titleElement).toBeInTheDocument ();
  });

  test ('Snapshot test of App', () => {
    const testAppSnapshot = create(<App />).toJSON();
    expect (testAppSnapshot).toMatchSnapshot();
  });

});

import {render, screen} from '@testing-library/react';
import {create} from 'react-test-renderer';
import Search from '../components/Search';

describe ('Search.js tests', () => {
  
  test ('Search button class', () => {
    render (<Search />);
    const button = document.getElementById ('submit');
    expect (button).toHaveAttribute ('type', 'submit');
  });

  test ('Snapshot test of Search', () => {
    const testSearchSnapshot = create (<Search />).toJSON ();
    expect (testSearchSnapshot).toMatchSnapshot ();
  });
  
});

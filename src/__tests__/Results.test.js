import {render, screen} from '@testing-library/react';
import {create} from 'react-test-renderer';
import Results from '../components/Results';

describe ('Results.js tests', () => {
  
    test ('Results container id', () => {
        render (<Results />);
        const resultsContainer = document.getElementById ('resultDiv');
        expect(resultsContainer).toBeTruthy();
      });
});

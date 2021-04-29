import {render, screen} from '@testing-library/react';
import {create} from 'react-test-renderer';
import ResultItems from '../components/ResultItems';

describe ('ResultsItems.js tests ', () => {
  let resultsComponentTest;

  const props = {
    image: `https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/f6/5e/59/f65e59e3-f169-e7e2-aa8a-b82859fd95df/source/100x100bb.jpg`,
    key: `1200868601`,
    name: `American Teen`,
    artist: 'Khalid',
    url: `https://music.apple.com/us/album/american-teen/1200868601?uo=4`,
    price: 9.99,
  };

  beforeEach (() => {
    const testInstance = create (<ResultItems {...props} />);
    resultsComponentTest = testInstance.root;
  });

  it ('Should render props item name', () => {
    const h5Render = resultsComponentTest.findByType ('h5');
    expect (h5Render.children).toEqual ([props.name]);
  });

  it ('Should render props artist', () => {
    const h6Render = resultsComponentTest.findByType ('h6');
    expect (h6Render.children).toEqual ([props.artist]);
  });

  it ('Should render props price', () => {
    const priceRender = resultsComponentTest.findByType('p');
    expect (priceRender.children[2]).toContain([props.price]);
  });

});

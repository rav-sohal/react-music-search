import React from 'react';
import ResultItems from './ResultItems';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ResultContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
`;

const noResult = () => {
  return (
    <div>
      Your search query did not get any results, please try again!
    </div>
  );
};

const Results = props => {
  const results = props.data;
  let albums;
  if (results) {
    if (results.length > 0) {
      albums = results.map (album => (
        <ResultItems
          image={album.artworkUrl100}
          key={album.collectionId}
          name={album.collectionName}
          artist={album.artistName}
          url={album.collectionViewUrl}
          type={album.collectionType}
          price={album.collectionPrice}
        />
      ));
    } else {
      albums = noResult();
    }
  }

  return (
    <ResultContainer>
      <div className="container" id="resultDiv">
        {albums}
      </div>
    </ResultContainer>
  );
};

Results.propTypes = {
  data: PropTypes.array,
};

export default Results;

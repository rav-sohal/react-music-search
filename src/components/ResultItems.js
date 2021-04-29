import styled from 'styled-components';
import PropTypes from 'prop-types';

const ResultItem = styled.div `
    margin-bottom: 40px;
`;

const ResultItems = props => {
  return (
    <div>
      <ResultItem>
      <div className="media">
        <img src={props.image} className="align-self-start mr-3" alt="result" />
        <div className="media-body">
        <a className="btn btn-primary float-right" href={props.url} target="_blank" rel="noreferrer">View</a>
          <h5 className="mt-0">{props.name}</h5>
          <h6 className="mt-0">{props.artist}</h6>
          <p><strong>Price:</strong> £{props.price}</p>
        </div>
      </div>
      </ResultItem>  
    </div>
  );
};

ResultItems.propTypes = {
  image: PropTypes.string,
  url: PropTypes.string,
  name: PropTypes.string,
  artist: PropTypes.string,
  price: PropTypes.number
};

export default ResultItems;

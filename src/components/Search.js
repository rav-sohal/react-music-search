import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const style = {
  textAlign: 'center',
};

const SearchDiv = styled.div`
    background: lightGrey;
    padding: 35px;
`;

const SearchInput = styled.input`
    height: 48px;
`;

class Search extends Component {
  state = {
    searchText: '',
  };

  searchInput = React.createRef ();

  onSearchChange = e => {
    this.setState ({searchText: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault ();
    this.props.onSearch (this.searchQuery.value);
    e.currentTarget.reset ();
  };

  render (props) {
    return (
      <Jumbotron style={style}>
        <div className="container">
          <h1>Search iTunes Music</h1>
          <p>
            Search your favourite artist, album or song.
          </p>
          <SearchDiv>
            <form className="form-group" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-9">
                  <SearchInput
                    type="search"
                    onChange={this.onSearchChange}
                    name="search"
                    ref={input => (this.searchQuery = input)}
                    placeholder="Search..."
                    className="form-control"
                  />
                </div>
                <div className="col-md-3">
                  <button
                    type="submit"
                    id="submit"
                    className="btn btn-success btn-lg btn-block sm-mt-3"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </SearchDiv>
        </div>
      </Jumbotron>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;

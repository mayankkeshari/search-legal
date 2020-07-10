import React from "react";
import { connect } from 'react-redux';
import SearchResultItem from './SearchResultItem';

class SearchResults extends React.Component {
  resultCount = 0;

//   [{
//     id: 1, name: 'tesxt1'
//   },
//   {
//     id: 1, name: 'tesxt1'
//   }
// ];

  renderList(items) {
    return items.map((item) => {
      return (
        <div key={item.id} className="mb-1">
          <SearchResultItem item={ item } />
        </div>
      );
    });
  }

  render() {
    const items = this.props.searchResults;
    if (items) {
      this.resultCount = items.length;
    }
    if (!this.resultCount) {
      return (
        <div className="ml-1 p-1 ui container">
          <div className="search-results-container">
            <div className="search-results-heading">No search results.</div>
          </div>
        </div>
      );
    }

    return (
      <div className="ml-1 p-1 ui container">
        <div className="search-results-container">
          <div className="search-results-heading">
            Results: {this.resultCount} items found.
          </div>

          {this.renderList(items)}

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      searchResults: state.searchResults
  }
}

export default connect(mapStateToProps)(SearchResults);

import React from "react";
import { connect } from "react-redux";
import { fetchDetail } from "../actions";
import SearchDetail from "./SearchDetail";

class SearchResultItem extends React.Component {

  state = {showDetailItem: false};
  selectResult(id) {
    this.props.fetchDetail(id);
    this.setState({showDetailItem: !this.state.showDetailItem});
  }

  render() {
    const item = this.props.item;
    return (
      <div>
        <div className="ui basic segment search-content-primary">
          <label
            className="btn-link"
            onClick={(e) => this.selectResult(item.id)}
          >
            {item.name}
          </label>
        </div>

        <div style={{ display: this.state.showDetailItem ? "block" : "none" }}>
          <SearchDetail id={item.id} />
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchDetail })(SearchResultItem);

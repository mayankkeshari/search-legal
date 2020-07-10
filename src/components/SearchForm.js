import React from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../actions";

class SearchForm extends React.Component {
  state = {
    byQuery: "",
    byDate: "",
    byAppeal: "",
    byAppellate: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // The search object
    const seacrhObj = {
      byQuery: this.state.byQuery,
      byDate: this.state.byDate,
      byAppeal: this.state.byAppeal,
      byAppellate: this.state.byAppellate,
    };

    this.props.fetchSearchResults(seacrhObj);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="bg-black">
        <div className="ui container p-1 segment inverted">
          <form className="ui form inverted" onSubmit={this.onFormSubmit}>
            <div className="two fields">
              <div className="field">
                <label htmlFor="byQuery">Query</label>
                <input
                  type="text"
                  id="byQuery"
                  name="byQuery"
                  placeholder="Type a query"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.byQuery}
                ></input>
              </div>
              <div className="field">
                <label htmlFor="byDate">Date</label>
                <input
                  type="date"
                  id="byDate"
                  name="byDate"
                  placeholder="Pick a date"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.byDate}
                ></input>
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label htmlFor="byAppeal">Appeal</label>
                <input
                  type="text"
                  id="byAppeal"
                  name="byAppeal"
                  placeholder="Type an appeal"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.byAppeal}
                ></input>
              </div>
              <div className="field">
                <label htmlFor="byAppellate">Appellate</label>
                <input
                  type="text"
                  id="byAppellate"
                  name="byAppellate"
                  placeholder="Type an appellate"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.byAppellate}
                ></input>
              </div>
            </div>

            <div className="ui button" onClick={this.onFormSubmit}>
              Search
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchSearchResults })(SearchForm);

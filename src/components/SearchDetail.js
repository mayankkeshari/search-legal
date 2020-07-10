import React from "react";
import { connect } from 'react-redux';

class SearchDetail extends React.Component {

  downloadFile = (id) => {
    // Hook your action here to download
    console.log(id);
  }

  render() {
    const itemDetail = this.props.detail.find((item) => item.id === this.props.id);
    if (!itemDetail) {
      return (
        <div />
      );
    }

    return (
      <div>
        <div className="ui secondary segment search-content-secondary">
          <span>Download the file</span>
          <i className="ml-1 cursor-pointer download small icon color-link" 
          onClick={ (e) => this.downloadFile(itemDetail.id) } />

          <div className="ui form mt-1">
            <div className="inline field detail-form-field-padding">
              <label>Email</label>
              <span>{ itemDetail.email }</span>
            </div>

            <div className="inline field detail-form-field-padding">
              <label>Phone</label>
              <span>{ itemDetail.phone }</span>
            </div>

          </div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.detail
  }
}

export default connect(mapStateToProps)(SearchDetail);

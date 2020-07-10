import React from "react";
import "./App.css";
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function App() {
  return (
    <div>
      <div className="ui tablet computer only padded grid">
        <div className="ui top borderless fluid menu header-container">
          <div className="ui container">
            <div className="header item p-0">
              <div className="logo" />
              <div className="middle aligned content">Search Legal</div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui message">
        <div className="ui container">
          <p>
            Simplify your search for legal documents!
          </p>
        </div>
      </div>

      <SearchForm />

      <SearchResults />

    </div>
  );
}

export default App;

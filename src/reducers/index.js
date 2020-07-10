import { combineReducers } from 'redux';

const searchResultsReducer = (state = [], action) => {
    if (action.type === 'FETCH_SEARCH_RESULT') {
        return action.payload;
    } else {
        return state;
    }
}

const detailReducer = (state = [], action) => {
    if (action.type === 'FETCH_DETAILS') {
        return [...state, action.payload];
    }
    return state;
}

export default combineReducers({
    searchResults: searchResultsReducer,
    detail: detailReducer
})
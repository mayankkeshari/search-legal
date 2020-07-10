import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchDetail = (id) => async (dispatch) => {
    const res = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch(
        {
            type: 'FETCH_DETAILS',
            payload: res.data
          }
    );
};

export const fetchSearchResults = (seacrhObj) => async (dispatch) => {
    console.log(seacrhObj);
    // google axios.post call
    // jsonPlaceHolder.post()
    const res = await jsonPlaceHolder.get('/users');
    dispatch(
        {
            type: 'FETCH_SEARCH_RESULT',
            payload: res.data
          }
    );
};
const getRecent = () => {
  //axios call here to update date
  // with data from the API?
};

export default (state, action) => {
  switch (action.type) {
    case GET_RECENT:
      return getRecent();
    default:
      return state;
  }
};

export const fetchBookByIdSuccess = (book) => {
  return {
  type: 'ADD_TODO',
  id: 55,
  text:"test1"
  }
};
// Async Action
export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get("http://localhost:8081/spring4/api1")
      .then(response => {
        // Handle data with sync action
        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};
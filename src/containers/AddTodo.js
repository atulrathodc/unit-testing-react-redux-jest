import React,{Component}  from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
const Axios = require('axios'); 


//const AddTodo = ({ active,sendTheAlert,ss }) => {

  class AddTodo extends Component {

  // componentDidMount(){
  //   //dispatch action
  //  // console.log(dispatch)
  //   this.props.dispatch( addTodo("dfg"))
  // }
  render()
  {
 var input;
var nextTodoId = 0
console.log("dispatch",this.props)
  return (
    <div>
      <form
        onSubmit={e => {
         // console.log(addTodo)
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
//sendTheAlert();
       // dispatch (async_addTodo(input.value));
   this.props.ss( addTodo(input.value))
      // this.props.dispatch( addTodo("dfg"))

// input.value = ''
         
         
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
 }
// const incrementAsync = () => dispatch => {
//     console.log("df",dispatch)
//     setTimeout(() => {
//       // Yay! Can invoke sync or async actions with `dispatch`
//            dispatch({
//   type: 'ADD_TODO',
//   id: 8,
//   text:"test1"
// });

//     }, 1000);
//   };
// const incrementAsync = function(){
// //return function(){
  
//   return  {
//   type: 'ADD_TODO',
//   id: 8,
//   text:"test1"
// }
// };
  
      var timer = null;
    clearTimeout(timer);
function async_addTodo(text) {
 
  // This form is allowed by Redux Thunk middleware
  // described below in “Async Action Creators” section.
  return function(dispatch, getState) {
    // if (getState().todos.length === 3) {
    //   // Exit early
    //   return
    // }

    timer=setTimeout(function(){
      dispatch( addTodo(text))
    },3000)
     
     // dispatch(addTodoWithoutCheck(text))
  }
}

// const fetchBookById = (bookId) => {
//   return (dispatch) => {
//     return Axios.get("http://localhost:8081/spring4/api1")
//       .then(response => {
//         // Handle data with sync action
//         dispatch({
//   type: 'ADD_TODO',
//   id: 8,
//   text:"test1"
// });
        
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };


const mapStateToProps = function (state, ownProps) {
    console.log(state,ownProps);

  
  return {
  active: state
}}

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch({
//   type: 'SET_VISIBILITY_FILTER',
//   filter:ownProps.filter
// })
// })

// const mapDispatchToProps =  (dispatch) => {
//     return {
//       // This dispatch will trigger 
//       // the Ajax request we setup
//       // in our actions
//      addTodo1:() => {dispatch(addTodo)
//     }
// };
// }

function mapDispatchToProps(dispatch) {
    return({
      ss:dispatch,
        sendTheAlert: () => {dispatch(addTodo("text"))}
    })
}


//export default connect()(AddTodo)
export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);

  // export default connect()
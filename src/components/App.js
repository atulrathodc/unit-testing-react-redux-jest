import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Simple from './SimpleForm'
function ss(e){
console.log(e);
}

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
<Simple onSubmit={ss} />
  </div>
)

export default App
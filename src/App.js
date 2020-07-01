import React from 'react';
import './App.css';
import TodoListComponent from './components/TodoListComponent/TodoListComponent'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer} from './redux/reducers/index'

const store = createStore(rootReducer)

function App() {
  return (
    <div className="App">
      <TodoListComponent/>
    </div>
  )
}

export default App;

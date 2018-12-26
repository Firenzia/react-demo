import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import TodoList from './TodoList'
import store from './store'

const App = (<Provider store={store}>
    <TodoList />
  </Provider>)

render(App,
  document.getElementById('root'));
  
  


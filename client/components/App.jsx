import React from 'react';
import TodosList from './todos-list';

const todos = [
{
  task: "make React tutorial",
  isCompleted: false
},
{
  task: "eat dinner",
  isCompleted: true
}
];


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todos: todos
    };
  }

  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <TodosList todos={this.state.todos} />
      </div>);
  }
}

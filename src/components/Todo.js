import React from 'react';
import Icon from './Icon';

const myUrl =  'https://jsonplaceholder.typicode.com/todos/';
const config = {
  mode: 'cors',
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*title: '',
      completed: '',*/
      todos: [],
    };
    this.submitTodo = this.submitTodo.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(myUrl);
    const json = await response.json();
    console.log(json);
    /*const { userId, id, title,completed } = json;*/
    const todoList = json.slice(0,10);
    console.log(todoList);
    this.setState({
      /*title: title,
      completed: completed,*/
      todos: todoList,
    });
  }

  async submitTodo() {
    const config = {
      method: 'POST',
    };
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', config);
    console.log(res);
  }


  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map( list => (
            <li>
              {list.title}
              <Icon checked={list.completed} />
            </li>
            )
          )}
        </ul>

        <input type="text" placeholder="title" />
        <span>completed?</span>
        <input type="checkbox" placeholder="completed" />

        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.submitTodo}
          >
          create
        </button>

      </div>
    )
  }
}

export default Todo;

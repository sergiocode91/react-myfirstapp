import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Task.css';

class Task extends Component {

  StyleComplete() {
    return {
      fontSize: '18px',
      color: this.props.task.done ? 'gray' : 'black',
      textDecoration: this.props.task.done ? 'line-through' : 'none'
    }
  }

  render() {
    const {task} = this.props;
    return <p style={this.StyleComplete()}>
              {task.id} - 
              {task.title} - 
              {task.description}
              <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
              <button className="btnDelete" onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
          </p>
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task;
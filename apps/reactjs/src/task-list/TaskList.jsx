import * as React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { deleteTask, updateTask } from '../actions';
import { bindActionCreators } from 'redux';

class TaskList extends React.PureComponent {
  render() {
    const {tasks} = this.props;

    return tasks.map(task => (
      <Task
        key={task.id}
        task={task}
        taskDeleted={this.props.deleteTask}
        taskUpdated={this.props.updateTask}
      />
    ));
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  deleteTask: bindActionCreators(deleteTask, dispatch),
  updateTask: bindActionCreators(updateTask, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

import * as React from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../actions';
import { bindActionCreators } from 'redux';
import TaskMinimal from './TaskMinimal';

class TaskGrid extends React.PureComponent {
  render() {
    return this.props.tasks.map(task => (
      <TaskMinimal
        key={task.id}
        task={task}
        taskUpdated={this.props.updateTask}
      />
    ))
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  updateTask: bindActionCreators(updateTask, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskGrid);

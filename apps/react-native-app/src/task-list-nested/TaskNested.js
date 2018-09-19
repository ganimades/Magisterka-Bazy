import * as React from 'react';
import { connect } from 'react-redux';
import { deleteTask, updateTask } from '../actions';
import { bindActionCreators } from 'redux';
import Task from '../task-list/Task';
import { View } from 'react-native';

class TaskNested extends React.PureComponent {
  render() {
    const {
      index,
      tasks,
    } = this.props;

    if (index >= tasks.length) {
      return null;
    }

    return (
      <View className="list-nested-micro-container">
        <Task
          task={tasks[index]}
          taskDeleted={this.props.deleteTask}
          taskUpdated={this.props.updateTask}
        />
        {index + 1 < tasks.length &&
        <WrappedTaskNested
          index={index + 1}
        />
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  deleteTask: bindActionCreators(deleteTask, dispatch),
  updateTask: bindActionCreators(updateTask, dispatch),
});
const WrappedTaskNested = connect(mapStateToProps, mapDispatchToProps)(
  TaskNested);
export default WrappedTaskNested;

import * as React from 'react';
import { connect } from 'react-redux';
import TaskNested from './TaskNested';

class TaskListNested extends React.PureComponent {

  render() {
    return (
      <TaskNested
        index={0}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListNested);

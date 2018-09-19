import React, { PureComponent } from 'react';
import TaskList from './task-list/TaskList';
import TaskGrid from './task-grid/TaskGrid';
import TaskListNested from './task-list-nested/TaskListNested';
import { connect } from 'react-redux';
import { setListType, updateList } from './actions';
import TaskCreator from './task-creator/TaskCreator';
import { bindActionCreators } from 'redux';
import { TaskGenerator } from './services/task-generator';
import Sidepanel from './sidepanel/Sidepanel';

class App extends PureComponent {

  componentWillMount() {
    this.props.updateList(TaskGenerator.default());
  }

  getListView() {
    const {listType} = this.props;
    switch (listType) {
      case 'list':
        return <div className="list-container">
          <TaskList/>
        </div>;
      case 'grid':
        return <div className="grid-container">
          <TaskGrid/>
        </div>;
      case 'nested-list':
        return <div className="list-container">
          <TaskListNested/>
        </div>;
      default:
        return null;
    }
  }

  render() {
    const {
      listType,
      tasks,
    } = this.props;

    return (
      <div className="main-container">
        <div className="header-container">
          <h1>
            Todo List
          </h1>
          <TaskCreator/>
          <div className="info-bar">
            <div
              id="task-count"
              className="task-count"
            >
              {tasks.length} tasks
            </div>
            <div className="list-types">
              <i
                className={`fa fa-th-list list-type ${listType === 'list'
                  ? 'selected'
                  : ''}`}
                title="List"
                onClick={this.props.setListTypeList}
              />
              <i
                className={`fa fa-briefcase list-type ${listType ===
                'nested-list' ? 'selected' : ''}`}
                title="Nested List"
                onClick={this.props.setListTypeListNested}
              />
              <i
                className={`fa fa-th list-type ${listType === 'grid'
                  ? 'selected'
                  : ''}`}
                title="Grid"
                onClick={this.props.setListTypeGrid}
              />
            </div>
          </div>
        </div>
        {this.getListView()}
        <Sidepanel/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  listType: state.listType,
});

const mapDispatchToProps = dispatch => ({
  setListTypeList: () => dispatch(setListType('list')),
  setListTypeListNested: () => dispatch(setListType('nested-list')),
  setListTypeGrid: () => dispatch(setListType('grid')),
  updateList: bindActionCreators(updateList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

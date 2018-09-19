import * as React from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, Button, ScrollView, Text, View } from 'react-native';
import { hidePanel, setListType, showPanel, updateList } from './actions';
import { bindActionCreators } from 'redux';
import styles from './styles';
import TaskCreator from './task-creator/TaskCreator';
import TaskList from './task-list/TaskList';
import { TaskGenerator } from './services/task-generator';
import TaskGrid from './task-grid/TaskGrid';
import TaskListNested from './task-list-nested/TaskListNested';
import Sidepanel from './sidepanel/Sidepanel';

class App extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    await this.storeAsyncInit();
    await this.listTypeAsyncInit();
    this.props.updateList(TaskGenerator.random100());
  }

  async storeAsyncInit() {
    const storageValue = await AsyncStorage.getItem('react-isOpened');
    switch (storageValue) {
      case 'true':
        this.props.showPanel();
        break;
      case 'false':
      default:
        this.props.hidePanel();
    }
  }

  async listTypeAsyncInit() {
    const listType = await AsyncStorage.getItem('react-listType') || 'list';
    this.props.setListType(listType);
  }

  getListView() {
    const {listType} = this.props;

    switch (listType) {
      case 'list':
        return <View style={styles.listContainer}>
          <TaskList/>
        </View>;
      case 'grid':
        return <View style={styles.gridContainer}>
          <TaskGrid/>
        </View>;
      case 'nested-list':
        return <View style={styles.listContainer}>
          <TaskListNested/>
        </View>;
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
      <ScrollView>
        <Sidepanel/>
        <View style={styles.headerContainer}>
          <Text style={styles.h1}>
            Todo List
          </Text>
          <TaskCreator/>
          <View style={styles.infoBar}>
            <Text
              id="task-count"
              className="task-count"
            >
              {tasks.length} tasks
            </Text>
            <View style={styles.listTypes}>
              <Button
                title="List"
                onPress={this.props.setListTypeList}
                color={listType === 'list' ? '#67a3ff' : '#989898'}
              />
              <Button
                title="Nested List"
                onPress={this.props.setListTypeListNested}
                color={listType === 'nested-list' ? '#67a3ff' : '#989898'}
              />
              <Button
                title="Grid"
                onPress={this.props.setListTypeGrid}
                color={listType === 'grid' ? '#67a3ff' : '#989898'}
              />
            </View>
          </View>
        </View>
        {this.getListView()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  listType: state.listType,
});

const mapDispatchToProps = dispatch => ({
  hidePanel: bindActionCreators(hidePanel, dispatch),
  showPanel: bindActionCreators(showPanel, dispatch),
  setListType: bindActionCreators(setListType, dispatch),
  setListTypeList: () => dispatch(setListType('list')),
  setListTypeListNested: () => dispatch(setListType('nested-list')),
  setListTypeGrid: () => dispatch(setListType('grid')),
  updateList: bindActionCreators(updateList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

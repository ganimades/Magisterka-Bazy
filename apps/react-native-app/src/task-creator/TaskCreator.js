import * as React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import { bindActionCreators } from 'redux';
import { Button, TextInput, View } from 'react-native';
import styles from '../styles';

class TaskCreator extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
    };

    this.createTask = this.createTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  createTask($event) {
    $event.preventDefault();

    this.props.addTask({
      name: this.state.taskName,
      isDone: false,
    });
    this.setState({
      taskName: '',
    });
  }

  handleInputChange(text) {
    this.setState({
      taskName: text,
    });
  }

  render() {
    return (
      <View style={styles.taskCreator}>
        <TextInput
          style={styles.taskCreatorInput}
          placeholder="New task"
          value={this.state.taskName}
          onChangeText={this.handleInputChange}
        />
        <Button
          className="btn btn-outline-primary"
          type="submit"
          title="Add"
          disabled={!this.state.taskName}
          onPress={this.createTask}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addTask: bindActionCreators(addTask, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator);

import * as React from 'react';
import { connect } from 'react-redux';
import { Button, CheckBox, Text, View } from 'react-native';
import styles from '../styles';

class Task extends React.PureComponent {

  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  deleteTask() {
    this.props.taskDeleted(this.props.task.id);
  }

  handleInputChange(value) {
    this.props.taskUpdated({
      ...this.props.task,
      isDone: value,
    });
  }

  render() {
    const {task} = this.props;
    return (
      <View style={styles.taskWrapper}>
        <CheckBox
          style={styles.taskCheckbox}
          value={task.isDone}
          onValueChange={this.handleInputChange}
        />
        <Text style={styles.taskName}>
          {task.name}
        </Text>
        <View style={styles.taskRemove}>
          <Button
            title="X"
            onPress={this.deleteTask}
            color={'#94acff'}
          />
        </View>
      </View>

    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Task);

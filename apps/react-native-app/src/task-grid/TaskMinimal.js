import * as React from 'react';
import { connect } from 'react-redux';
import { CheckBox, View } from 'react-native';
import styles from '../styles';

class TaskMinimal extends React.PureComponent {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
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
      <View className="task-minimal">
        <CheckBox
          style={styles.taskCheckbox}
          value={task.isDone}
          onValueChange={this.handleInputChange}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TaskMinimal);

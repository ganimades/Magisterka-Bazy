import * as React from 'react';
import { connect } from 'react-redux';

class Task extends React.PureComponent {

  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  deleteTask() {
    this.props.taskDeleted(this.props.task.id);
  }

  handleInputChange($event) {
    this.props.taskUpdated({
      ...this.props.task,
      isDone: $event.target.checked,
    });
  }

  render() {
    const {task} = this.props;
    return (
      <div className={`task ${task.isDone ? 'completed' : ''}`}>
        <div className="body">
          <div className="is-done-wrapper">
            <label className="label">
              <input
                className="label__checkbox"
                type="checkbox"
                checked={task.isDone}
                onChange={this.handleInputChange}
              />
              <span className="label__text">
                <span className="label__check">
                  <i className="fa fa-check icon"/>
                </span>
              </span>
            </label>
          </div>
          <span className="name">
            {task.name}
          </span>
          <div
            className="delete-wrapper"
            onClick={this.deleteTask}
          >
            <i className="fa fa-times"/>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Task);

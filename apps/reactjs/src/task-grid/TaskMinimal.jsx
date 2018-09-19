import * as React from 'react';
import { connect } from 'react-redux';

class TaskMinimal extends React.PureComponent {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange($event) {
    this.props.taskUpdated({
      ...this.props.task,
      isDone: $event.target.checked,
    });
  }

  render() {
    return (
      <div className="task-minimal">
        <label className="label">
          <input
            className="label__checkbox"
            type="checkbox"
            checked={this.props.task.isDone}
            onChange={this.handleInputChange}
          />
          <span className="label__text">
          <span className="label__check">
            <i className="fa fa-check icon"/>
          </span>
        </span>
        </label>
      </div>

    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TaskMinimal);

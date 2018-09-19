import * as React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import { bindActionCreators } from 'redux';

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

  handleInputChange($event) {
    this.setState({
      taskName: $event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.createTask}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="New task"
            value={this.state.taskName}
            onChange={this.handleInputChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              type="submit"
              disabled={!this.state.taskName}
            >
              <i className="fa fa-plus"/>
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addTask: bindActionCreators(addTask, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator);

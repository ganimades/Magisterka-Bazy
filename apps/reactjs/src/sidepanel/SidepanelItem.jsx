import * as React from 'react';
import { connect } from 'react-redux';

class SidepanelItem extends React.PureComponent {
  render() {
    return (
      <div className="item">
        <div className="key">
          {this.props.label}
        </div>
        <div className="value">
          <button
            id={this.props.clickId || ''}
            className="btn btn-outline-secondary btn-sm"
            onClick={this.props.action}
          >
            Apply
          </button>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SidepanelItem);

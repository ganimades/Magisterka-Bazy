import * as React from 'react';
import { connect } from 'react-redux';
import { togglePanel } from '../actions';
import { bindActionCreators } from 'redux';
import SidepanelBody from './SidepanelBody';

class Sidepanel extends React.PureComponent {
  render() {
    return (
      <div className="sidepanel">
        <div className="closed">
          <div
            id="toggle-sidepanel"
            className="toggle-wrapper"
            onClick={this.props.togglePanel}
          >
            <i className="fa fa-bars"/>
          </div>
        </div>
        <div
          className={`opened ${this.props.isOpened ? 'selected' : ''}`}
        >
          <div className="header">
            <h3 className="name">Configs</h3>
            <div
              className="toggle-wrapper"
              onClick={this.props.togglePanel}
            >
              <i className="fa fa-times"/>
            </div>
          </div>

          <div className="body">
            <SidepanelBody/>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  isOpened: state.isOpened,
});

const mapDispatchToProps = dispatch => ({
  togglePanel: bindActionCreators(togglePanel, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidepanel);

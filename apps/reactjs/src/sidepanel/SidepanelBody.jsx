import * as React from 'react';
import { connect } from 'react-redux';
import SidepanelItem from './SidepanelItem';
import { clearAll, setListType, updateList } from '../actions';
import { bindActionCreators } from 'redux';
import { TaskGenerator } from '../services/task-generator';
import { startMeasure, stopMeasure } from '../perf-measure';

class SidepanelBody extends React.PureComponent {

  constructor(props) {
    super(props);

    this.genDefault = this.genDefault.bind(this);
    this.genRandom100 = this.genRandom100.bind(this);
    this.genRandom500 = this.genRandom500.bind(this);
    this.genRandom1k = this.genRandom1k.bind(this);
    this.genRandom5k = this.genRandom5k.bind(this);
    this.genRandom10k = this.genRandom10k.bind(this);
    this.genRandom20k = this.genRandom20k.bind(this);
  }

  componentDidUpdate() {
    stopMeasure();
  }
  componentDidMount() {
    stopMeasure();
  }

  genDefault() {
    startMeasure('generate Default');
    this.props.updateList(TaskGenerator.default());
  }

  genRandom100() {
    startMeasure('generate Random 100');
    this.props.updateList(TaskGenerator.random100());
  }

  genRandom500() {
    startMeasure('generate Random 500');
    this.props.updateList(TaskGenerator.random500());
  }

  genRandom1k() {
    startMeasure('generate Random 1k');
    this.props.updateList(TaskGenerator.random1k());
  }

  genRandom5k() {
    startMeasure('generate Random 5k');
    this.props.updateList(TaskGenerator.random5k());
  }

  genRandom10k() {
    startMeasure('generate Random 10k');
    this.props.updateList(TaskGenerator.random10k());
  }

  genRandom20k() {
    startMeasure('generate Random 20k');
    this.props.updateList(TaskGenerator.random20k());
  }

  render() {
    return (
      <div className="sidepanel-body">
        <div className="section">
          <div className="name">
            Layout
          </div>
          <SidepanelItem
            clickId="layout-list"
            label="List"
            action={this.props.setListTypeList}
          />
          <SidepanelItem
            clickId="layout-nested-list"
            label="Nested List"
            action={this.props.setListTypeListNested}
          />
          <SidepanelItem
            clickId="layout-grid"
            label="Grid"
            action={this.props.setListTypeGrid}
          />
        </div>
        <div className="section">
          <div className="name">
            Utils
          </div>
          <SidepanelItem
            clickId="utils-clearAll"
            label="Clear All"
            action={this.props.clearAll}
          />
        </div>
        <div className="section">
          <div className="name">
            Generators
          </div>
          <SidepanelItem
            clickId="gen-default"
            label="Default"
            action={this.genDefault}
          />
          <SidepanelItem
            clickId="gen-random100"
            label="Random 100"
            action={this.genRandom100}
          />
          <SidepanelItem
            clickId="gen-random500"
            label="Random 500"
            action={this.genRandom500}
          />
          <SidepanelItem
            clickId="gen-random1k"
            label="Random 1k"
            action={this.genRandom1k}
          />
          <SidepanelItem
            clickId="gen-random5k"
            label="Random 5k"
            action={this.genRandom5k}
          />
          <SidepanelItem
            clickId="gen-random10k"
            label="Random 10k"
            action={this.genRandom10k}
          />
          <SidepanelItem
            clickId="gen-random20k"
            label="Random 20k"
            action={this.genRandom20k}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  setListTypeList: () => dispatch(setListType('list')),
  setListTypeListNested: () => dispatch(setListType('nested-list')),
  setListTypeGrid: () => dispatch(setListType('grid')),
  clearAll: bindActionCreators(clearAll, dispatch),
  updateList: bindActionCreators(updateList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidepanelBody);

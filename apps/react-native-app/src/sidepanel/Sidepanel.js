import * as React from 'react';
import { connect } from 'react-redux';
import { togglePanel } from '../actions';
import { bindActionCreators } from 'redux';
import SidepanelBody from './SidepanelBody';
import { Button, Text, View } from 'react-native';
import styles from '../styles';

class Sidepanel extends React.PureComponent {
  render() {
    return (
      <View style={styles.sidepanel}>
        {!this.props.isOpened &&
        <Button
          id="open-sidepanel"
          style={styles.openSidepanel}
          onPress={this.props.togglePanel}
          title="Open Sidebar"
        />
        }
        {this.props.isOpened &&
        <View style={styles.sidepanelOpened}>
          <View className="header">
            <Button
              id="close-sidepanel"
              style={styles.closeSidepanel}
              onPress={this.props.togglePanel}
              title="Close Sidebar"
            />
            <Text style={styles.h3}>
              Configs
            </Text>
          </View>

          <View className="body">
            <SidepanelBody/>
          </View>
        </View>
        }
      </View>

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

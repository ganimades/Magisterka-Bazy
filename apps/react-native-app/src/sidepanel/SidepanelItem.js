import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Text, View } from 'react-native';
import styles from '../styles';

class SidepanelItem extends React.PureComponent {
  render() {
    return (
      <View style={styles.item}>
        <Text style={styles.itemKey}>
          {this.props.label}
        </Text>
        <View className="value">
          <Button
            id={this.props.clickId || ''}
            className="btn btn-outline-secondary btn-sm"
            title="Apply"
            onPress={this.props.action}
          />
        </View>
      </View>

    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SidepanelItem);

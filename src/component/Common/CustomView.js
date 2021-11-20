import React from 'react';
import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

import {getStatusBarHeight} from 'react-native-status-bar-height';

const {width, height} = Dimensions.get('window');

const CustomView = props => {
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      {props.children}
    </SafeAreaView>
  );
};

export default CustomView;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        paddingTop: getStatusBarHeight() - 10,
      },

    }),
  },
});

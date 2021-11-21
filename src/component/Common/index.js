import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';

const MainModal = props => {
  return (
    <Modal
      animationIn="zoomIn"
      animationInTiming={500}
      animationOut="zoomOut"
      animationOutTiming={500}
      isVisible={props.visible}
      onBackdropPress={() => props.closeModal()}
      >
      {props.children}
    </Modal>
  );
};

export default MainModal;

const styles = StyleSheet.create({});

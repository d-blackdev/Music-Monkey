import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';

const MainSuccessModal = props => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(false);
    if (
      props.successState !== '' ||
      props.successState !== null ||
      props.successState !== false
    ) {
      setShowModal(true);
    }
    setTimeout(
      () => {
        if (props.clearSuccess) {
          setShowModal(false);
          props.clearSuccess();
        }
        setShowModal(false);
      },
      props.clearTime ? props.clearTime : 2000,
    );
    return () => clearTimeout();
  }, [props.successState]);

  if (props.successState === '' || props.successState === null) {
    return null;
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(false)}>
      <View style={styles.modalView}>
        <Text style={{color: '#fff', fontSize: 10}}>{props.children}</Text>
      </View>
    </Modal>
  );
};

export default MainSuccessModal;

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    top: '7%',
    width: '90%',
    backgroundColor: '#03C15C',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

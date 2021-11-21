import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';

// import {scale, ScaledSheet} from 'react-native-size-matters';

const MainErrorModal = props => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(false);
    if (
      props.errorState !== '' ||
      props.errorState !== null ||
      props.errorState !== false
    ) {
      setShowModal(true);
    }
    setTimeout(
      () => {
        // if (props.clearError) {
        //   setShowModal(false);
        //   props?.clearError();
        // }
        setShowModal(false);
      },
      props.clearTime ? props.clearTime : 2000,
    );
    return () => {
      clearTimeout();
    };
  }, [props.errorState]);

  if (props.errorState === '' || props.errorState === null) {
    return null;
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(false)}>
      <View style={styles.modalView}>
        <Text style={{color: '#fff', fontSize: 11}}>{props.children}</Text>
      </View>
    </Modal>
  );
};

export default MainErrorModal;

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    top: '7%',
    width: '90%',
    backgroundColor: '#F02052',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

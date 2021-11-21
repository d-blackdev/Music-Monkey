import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';


const ConfirmModal = props => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>{props.title}</Text> */}
      <Text style={styles.headerSubText}>{props.text}</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => props.closeModal()}>
          <Text style={styles.cancelText}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.onPress()}>
          <Text style={styles.cancelText}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmModal;

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: '30%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 20,
  },
  header: {
    fontSize: 20,
  },
  headerSubText: {
    fontSize: 18,
    paddingVertical: 10,
  },
  cancelText: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#FFA91F',
  },
});

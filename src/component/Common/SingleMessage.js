import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Logo from '../../assests/images/spec-bg.jpg';

const SingleMessage = () => {
  return (
    <View style={styles.content}>
      <Image source={Logo} style={styles.img} />
      <View style={styles.message}>
        <View style={styles.name}>
          <Text style={{fontSize: 14, color: '#000', fontWeight: '700'}}>
            Deaola
          </Text>
          <Text style={{fontSize: 12, color: '#ADAFBB', fontWeight: '400'}}>
            23 min
          </Text>
        </View>
        <Text
          style={{
            fontSize: 12,
            color: '#ADAFBB',
            fontWeight: '500',
            // marginTop: 5,
          }}>
          Ok, see you then.
        </Text>
      </View>
    </View>
  );
};

export default SingleMessage;

const styles = StyleSheet.create({
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  img: {
    width: 48,
    height: 48,
    borderRadius: 48,
    marginRight: 20,
  },
  message: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E6EA',
    paddingBottom: 15,
    width: '80%',
    // paddingTop: 10,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
});

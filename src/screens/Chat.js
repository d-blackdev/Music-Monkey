import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import CustomView from '../component/Common/CustomView';
import Contact from '../assests/images/contact-love.svg';
import Search from '../assests/images/search.svg';
import SingleMessage from '../component/Common/SingleMessage';

const Chat = () => {
  return (
    <CustomView>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        // backgroundColor="#fff"
      />
      <View style={styles.content}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.text}>Chats</Text>
          <View style={styles.icon}>
            <Contact />
          </View>
        </View>
        {/* SEARCH INPUT */}
        <View style={styles.search}>
          <Search />
          <TextInput
            placeholder="Search"
            placeholderTextColor="rgba(22, 18, 61, 0.5)"
            style={{color: 'rgba(22, 18, 61, 1)', width: '100%', marginLeft: 5}}
          />
        </View>
        {/* CONTENT */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{
            // paddingTop: 20,
            width: '100%',
            paddingBottom: 20,
          }}>
          <View style={{marginTop: '10%'}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: '#000',
                paddingBottom: 20,
              }}>
              Messages
            </Text>
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
          </View>
        </ScrollView>
      </View>
    </CustomView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
  },
  icon: {
    width: 52,
    height: 46,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#E8E6EA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#E8E6EA',
    marginTop: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

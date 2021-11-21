import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomView from '../component/Common/CustomView';
import Contact from '../assests/images/contact-love.svg';
import Search from '../assests/images/search.svg';
import SingleMessage from '../component/Common/SingleMessage';
import Icon from 'react-native-vector-icons/AntDesign';
import {login, logout} from '../redux/Actions/AuthActions/index';
import {useDispatch, useSelector} from 'react-redux';
import ConfirmModal from '../component/Common/ConfirmModal';
import MainModal from '../component/Common';

const Chat = () => {
  const dispatch = useDispatch();
  const [showModal,setShowModal] = useState(false)
  const userLogin = useSelector(state => state.authToken.userLogin);
  const {user} = userLogin;
  return (
    <CustomView>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#fff"
      />
      <MainModal visible={showModal} closeModal={() => setShowModal(false)}>
        <ConfirmModal
          
          text="Are you sure you want to logout?"
          closeModal={() => setShowModal(false)}
          onPress={() => dispatch(logout())}
        />
      </MainModal>
      <View style={styles.content}>
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.text}>{user?.Name}</Text>
            <Text style={styles.text2}>{user?.Email}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={ () => setShowModal(true)}
            style={styles.icon}>
            <Icon name="logout" color="#000" size={20} />
          </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  icon: {
    width: 52,
    height: 46,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#FFA91F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    fontSize: 15,
    color: '#FFA91F',
    fontWeight: '700',
    marginTop: '3%',
  },
  search: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#E8E6EA',
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

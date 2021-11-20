import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomView from '../component/Common/CustomView';
import Bg from '../assests/images/spec-bg.jpg';
import Logo from '../assests/images/Logo.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [visible, setVisible] = useState(true);
  const navigation = useNavigation();

  const togglePassword = () => {
    setVisible(!visible);
    setShowPassword(!showPassword);
  };
  return (
    <CustomView>
      <StatusBar hidden={true} barStyle="light-content" />
      <ImageBackground style={{flex: 1, width: '100%'}} source={Bg}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: '#000',
            opacity: 0.6,
            zIndex: 50,
          }}
        />
        <View style={styles.content}>
          <View>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.text}>find love here</Text>
          </View>
          <View style={styles.formContent}>
            <Text
              style={{
                textAlign: 'center',
                color: '#FFF',
                fontSize: 20,
                fontWeight: '700',
                marginBottom: 20,
              }}>
              Log In
            </Text>
            <View style={[styles.textInput, {marginBottom: 20}]}>
              <TextInput
                placeholder="Email or Username"
                placeholderTextColor="rgba(22, 18, 61, 0.5)"
                value={email}
                onChangeText={val => setEmail(val)}
                style={{color: 'rgba(22, 18, 61, 1)', width: '100%'}}
              />
            </View>
            {/* PASSWORD */}
            <View style={styles.textInput}>
              <TextInput
                placeholder="password"
                secureTextEntry={visible}
                placeholderTextColor="rgba(22, 18, 61, 0.5)"
                value={password}
                onChangeText={val => setPassword(val)}
                // onBlur={formik.handleBlur('password')}
                textContentType={!showPassword ? 'name' : 'password'}
                style={{color: 'rgba(22, 18, 61, 1)', width: '100%'}}
              />
              {!showPassword ? (
                <Icon
                  name="eye"
                  size={20}
                  style={styles.inputIcon}
                  onPress={togglePassword}
                />
              ) : (
                <Icon
                  name="eye-slash"
                  size={20}
                  style={styles.inputIcon}
                  onPress={togglePassword}
                />
              )}
            </View>
            {/* <Text style={styles.forgetText}>Forget Password ?</Text> */}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Tab', {screen: 'Chat'})}
            activeOpacity={0.8}
            style={styles.btn}>
            <Text style={{fontSize: 15, color: '#fff', fontWeight: '400'}}>
              Log In
            </Text>
          </TouchableOpacity>
          {/* NO ACCOUNT */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#ddd',
                textAlign: 'center',
                fontSize: 12,
                letterSpacing: 0.5,
              }}>
              Don't have an account ?
            </Text>
            <TouchableOpacity
              activeOpacity={0.6}
              //   onPress={() => navigation.push('SignIn')}
            >
              <Text
                style={{
                  color: '#fFF',
                  fontSize: 12,
                  letterSpacing: 0.5,
                  fontWeight: '600',
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </CustomView>
  );
};

export default Login;

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 200,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  logo: {},
  text: {
    fontSize: 16,
    color: '#fff',
    fontStyle: 'italic',
    paddingLeft: 30,
  },
  formContent: {
    // flex: 1,
    marginTop: '30%',
  },
  textInput: {
    borderColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    width: '100%',
    borderRadius: 17,
    padding: 5,
    fontFamily: 'Gilroy-light',
    backgroundColor: '#fff',
    textTransform: 'uppercase',
    position: 'relative',
    height: 54,
    marginBottom: 10,
    paddingLeft: 10,
  },
  inputIcon: {
    position: 'absolute',
    top: 14,
    right: 20,
    color: 'rgba(22, 18, 61, 0.5)',
  },
  forgetText: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 12,
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: '#EB5757',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: '25%',
  },
});

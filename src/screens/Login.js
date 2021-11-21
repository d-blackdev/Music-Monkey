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
  ActivityIndicator,
} from 'react-native';
import CustomView from '../component/Common/CustomView';
import Bg from '../assests/images/main-bg.jpg';
import Logo from '../assests/images/Logo.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import MainErrorModal from '../component/Errors/MainErrorModal';
import {login} from '../redux/Actions/AuthActions/index';
import {useDispatch, useSelector} from 'react-redux';
import {CLEAR_ERROR} from '../redux/Constants';

const Login = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [visible, setVisible] = useState(true);
  const [clientErr, setClientErr] = useState('');

  const userLogin = useSelector(state => state.authToken.userLogin);
  const {loading, error} = userLogin;

  const navigation = useNavigation();

  const togglePassword = () => {
    setVisible(!visible);
    setShowPassword(!showPassword);
  };

  const submit = () => {
    if (name === '' || email === '' || password === '') {
      setClientErr('All input field are required');
    } else if (password.length < 8) {
      setClientErr('Password should be at least 8 characters');
    } else {
      dispatch(login(name, email, password));
    }
  };

  let btnView = null;
  let errorView = null;
  let clientView = null;
  if (loading) {
    btnView = <ActivityIndicator size="large" color="#fff" />;
  } else {
    btnView = (
      <Text style={{fontSize: 15, color: '#fff', fontWeight: '400'}}>
        Log In
      </Text>
    );
  }

  if (error) {
    errorView = (
      <MainErrorModal
        clearTime={3000}
        clearError={dispatch({type: CLEAR_ERROR})}>
        {error}
      </MainErrorModal>
    );
  }
  if (clientErr) {
    clientView = (
      <MainErrorModal clearTime={3000} clearError={() => setClientErr('')}>
        {clientErr}
      </MainErrorModal>
    );
  }
  return (
    <CustomView>
      <StatusBar hidden={true} barStyle="light-content" />
      <ImageBackground style={{flex: 1, width: '100%'}} source={Bg}>
        {errorView}
        {clientView}
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: '#000',
            opacity: 0.7,
            zIndex: 50,
          }}
        />
        <View style={styles.content}>
          <View style={{alignSelf: 'flex-start', marginTop: 20}}>
            <Text style={styles.text}>Create</Text>
            <Text style={[styles.text, {marginTop: 4}]}>an account</Text>
            <Text style={styles.text2}>
              Fill the details and create account
            </Text>
          </View>
          <View style={styles.formContent}>
            <View style={[styles.textInput, {marginBottom: 20}]}>
              <TextInput
                placeholder="Username"
                placeholderTextColor="#999"
                value={name}
                onChangeText={val => setName(val)}
                style={{color: '#EEE', width: '100%'}}
              />
            </View>
            <View style={[styles.textInput, {marginBottom: 20}]}>
              <TextInput
                placeholder="Email ID"
                placeholderTextColor="#999"
                value={email}
                onChangeText={val => setEmail(val)}
                style={{color: '#EEE', width: '100%'}}
              />
            </View>
            {/* PASSWORD */}
            <View style={styles.textInput}>
              <TextInput
                placeholder="Password"
                secureTextEntry={visible}
                placeholderTextColor="#999"
                value={password}
                onChangeText={val => setPassword(val)}
                // onBlur={formik.handleBlur('password')}
                textContentType={!showPassword ? 'name' : 'password'}
                style={{color: '#EEE', width: '100%'}}
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
            onPress={() => submit()}
            activeOpacity={0.8}
            style={styles.btn}>
            {btnView}
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
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  logo: {},
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '700',
  },
  text2: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '400',
    marginTop: '5%',
  },
  formContent: {
    // flex: 1,
    marginTop: '20%',
  },
  textInput: {
    borderColor: '#FFA91F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    width: '100%',
    borderRadius: 20,
    padding: 5,
    fontFamily: 'Gilroy-light',
    backgroundColor: 'transparent',
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
    color: '#fff',
  },
  forgetText: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 12,
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFA91F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: '5%',
  },
});

import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.logo}>Login</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#ffff"
            onChangeText={text => this.setState({email: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({password: text})}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signupText}>SignUp</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71bff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: 'white',
    marginTop: -30,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '100',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#ffff',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#43c454',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'blue',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#1e45ba',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 15,
  },
  signupText: {
    color: 'black',
    fontSize: 16,
  },
});

import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';


export default class SignUpscreen extends React.Component {
  state = {
    EmailID: '',
    Password: '',
    FullName: '',
    CompanyName: '',
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.logo}>Join Now!</Text>
        <Text style={styles.memberText}>Be a Member</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email ID..."
            placeholderTextColor="#ffff"
            onChangeText={text => this.setState({EmailID: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({Password: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Full Name..."
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({FullName: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Company Name..."
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({CompanyName: text})}
          />
        </View>
        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpText}>SignUp</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2e2c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#ffff',
    marginBottom: 70,
  },
  memberText: {
    color: 'white',
    marginBottom: 70,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
  inputView: {
    width: '80%',
    backgroundColor: 'grey',
    borderRadius: 20,
    height: 50,
    justifyContent: 'space-evenly',
    padding: 20,
    marginBottom: 10,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  signUpBtn: {
    width: '80%',
    backgroundColor: '#ffff',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 50,
  },
  signUpText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

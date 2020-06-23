import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button
  } from 'react-native';
  import UserActions from '../data/user/UserActions'

export default function RegisterUserView({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
  
    //const { signIn } = React.useContext(AuthContext);
    function register(user){
        UserActions.registerUser(user);
    }
    return (
      <View>
         <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={() => register({ username, password })} />
        <Button
        title="SignUp"
        onPress={() => navigation.navigate('SignUp')}
      /> 
      </View>
    );
  }
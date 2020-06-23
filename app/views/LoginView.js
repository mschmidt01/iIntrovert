import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button
  } from 'react-native';
  import UserActions from '../data/user/UserActions'

export default function LoginView({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 

    function signIn(user){
        UserActions.loginUser(user)
    }
    //const { signIn } = React.useContext(AuthContext);
    
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
        <Button title="Login " onPress={() => signIn({ username, password })} />
        <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      /> 
      </View>
    );
  }
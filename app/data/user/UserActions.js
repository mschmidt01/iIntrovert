import UserActionTypes from './UserActionTypes';
import ApplicationDispatcher from '../ApplicationDispatcher'
import Constants from 'expo-constants';

const axios = require('axios').default;

const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:6981`;

const Actions = {
    registerUser(user){
        // send to api 
    },
    loginUser(user){
      var sessionId = '';
      axios.defaults.withCredentials = true;
        axios.post(uri + '/login',{
            username: user.username,
            password: user.password
          })
          //
          .then(function (response) {
            const sessionId = response.data.sessionId;
            const success = response.data.login;
            return response.data;
          }).then(function(data) {
            const sessionId = data.sessionId;
            const success = data.login;
            if(success === "success"){
              console.log("login success")
              user.sessionId = sessionId;
              ApplicationDispatcher.dispatch({
                type: "login",
                user,
            })
            } else{
              console.log("login fail")
            }
          })
          .catch(function (error) {
            //console.log(error);
          });
        // send to api
        //dispacth to store
    }
}

export default Actions;
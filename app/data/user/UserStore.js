import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import UserActionTypes from './UserActionTypes';
import ApplicationDispatcher from '../ApplicationDispatcher';
import User from './User';
class UserStore extends ReduceStore{
    constructor(){
        super(ApplicationDispatcher);
    }
    getInitialState(){
        return Immutable.OrderedMap();
    }

    reduce(state, action){
        //console.log(typeof action.type);

        //console.log(action.type);
        switch (action.type) {
           //
            case "login":
                const user = action.user;
                const userid = user.username;
                return state.set(
                    userid,
                    new User({
                        username,
                        sessionId: user.sessionId,
                        username: user.username,
                    })
                );
                
            default:
                return state;
        }
    }
}

export default new UserStore();
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
        switch (action.type) {
            case UserActionTypes.LOGIN_USER:
                const userid = user.id;
                return state.set(
                    userid,
                    new User({
                        userid,
                        sessionId: action.user.sessionId,
                        username: action.user.username,
                    })
                );
            default:
                return state;
        }
    }
}

export default new LocationStore();
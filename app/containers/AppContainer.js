import AppView from '../views/Appview';
import {Container} from 'flux/utils';
import LocationStore from '../data/location/LocationStore';
import UserStore from '../data/user/UserStore';

function getStores(){
    return [
        LocationStore,
        UserStore,
    ];
}

function getState(){
    return{
        locations: LocationStore.getState(),
        user: UserStore.getState(),
    }
}
export default Container.createFunctional(AppView, getStores, getState)
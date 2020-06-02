import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import LocationStore from '../data/location/LocationStore';

function getStores(){
    return [
        LocationStore,
    ];
}

function getState(){
    return{
        locations: LocationStore.getState(),
    }
}
console.log(getStores())
export default Container.createFunctional(AppView, getStores, getState)
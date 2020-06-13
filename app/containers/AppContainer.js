import AppView from '../views/Appview';
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
export default Container.createFunctional(AppView, getStores, getState)
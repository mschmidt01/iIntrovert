import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import LocationActionTypes from './LocationActionTypes';
import ApplicationDispatcher from '../ApplicationDispatcher';
import Location from './Location';
class LocationStore extends ReduceStore{
    constructor(){
        super(ApplicationDispatcher);
    }
    getInitialState(){
        return Immutable.OrderedMap();
    }

    reduce(state, action){
        switch (action.type) {
            case LocationActionTypes.ADD_LOCATION:
                const id = action.location.id;
                return state.set(
                    id,
                    new Location({
                        id,
                        name: action.location.name,
                        address: action.location.adress,
                        type: action.location.type,
                        isFavorite: action.location.isFavorite,
                        rating: action.location.rating,
                        popularTimes: action.location.popularTimes,
                        coordinates: action.location.coordinates,
                        country: action.location.country
                    })
                );
            default:
                return state;
        }
    }
}

export default new LocationStore();
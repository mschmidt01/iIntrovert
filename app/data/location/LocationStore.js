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
                        address: action.location.address,
                        type: action.location.type,
                        isFavorite: action.location.isFavorite,
                        coordinates: action.location.coordinates,
                        rating: action.location.rating,
                        popularTimes: [],
                    })
                );
        
            default:
                return state;
        }
    }
}

export default new LocationStore();
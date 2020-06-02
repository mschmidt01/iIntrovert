import LocationActionTypes from './LocationActionTypes';
import ApplicationDispatcher from '../ApplicationDispatcher'

const Actions = {
    addLocation(location){
        ApplicationDispatcher.dispatch({
            type: LocationActionTypes.ADD_LOCATION,
            location,
        })
    }
}

export default Actions;
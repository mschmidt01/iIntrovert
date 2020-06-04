import MongoDBLocationAdapter from './MongoDBLocationAdapter'
export default class LocationManager{
    constructor(){
        this.locationAdapter = new MongoDBLocationAdapter();
    }
    getLocations(res){
        this.locationAdapter.getLocations(res);
    }
    searchLocations(coordinates, radius){
        return null;
    }
}
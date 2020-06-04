import MongoDBLocationService from './MongoDBLocationService';

export default class MongoDBLocationAdapter {

    constructor(){
        this.locationservice = new MongoDBLocationService();
    }

    getLocations(res){
     this.locationservice.getLocations(res);
    }
}
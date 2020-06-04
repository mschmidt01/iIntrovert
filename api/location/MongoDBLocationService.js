import {MongoClient} from 'mongodb';

export default class MongoDBLocationService{

    constructor(){
        this.MongoClient = require('mongodb').MongoClient;;
    }

      getLocations(res){
        let locations;
        const MongoClient = require('mongodb').MongoClient;
        const uri = "mongodb+srv://admin:admin@cluster0-3zlvj.mongodb.net/iIntrovert?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true });
         client.connect(err => {
          const collection = client.db("iIntrovert").collection("locations");
          collection.find().toArray(function(err, result) {
            if (err) {
              throw err;
            }
            res.send(result)
            });
            client.close();
        })
     }
    }
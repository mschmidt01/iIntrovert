import {MongoClient} from 'mongodb';

export default class MongoDBLocationService{

    constructor(){
        this.MongoClient = require('mongodb').MongoClient;;
    }

      getLocations(res){
        let locations;
        const MongoClient = require('mongodb').MongoClient;
        const uri = "mongodb+srv://iIntrovert:admin@cluster0-f8krs.mongodb.net/introvert?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true });
         client.connect(err => {
          const collection = client.db("introvert").collection("locations");
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
import {MongoClient} from 'mongodb';

export default class RandomPopularTimesGenerator{

    constructor(){
        this.MongoClient = require('mongodb').MongoClient;
    }

    generateRandomPopluarTimes(){
        let locations;
        
        const MongoClient = require('mongodb').MongoClient;
        const uri = "mongodb+srv://iIntrovert:admin@cluster0-f8krs.mongodb.net/introvert?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true });
         client.connect(err => {
          const collection = client.db("introvert").collection("locations");
          collection.find().toArray(function(err, result) {
            if (err) {
                console.log(err);
            }
            result.forEach(element => {
                let popularTime = {
                    monday:[],
                    tuesday:[],
                    wednesday:[],
                    thursday:[],
                    friday:[],
                    saturday:[],
                    sunday:[]
                }
                Object.keys(popularTime).forEach(function(key) {
                    for (let i = 0; i < 24; i++) {
                        popularTime[key].push(Math.floor(Math.random() * 99));                      
                    }
                });
                var locToUpdate = {};
                locToUpdate = Object.assign(locToUpdate, element);

                delete locToUpdate._id;
                locToUpdate.popularTimes = popularTime;
                try {
                    collection.findOneAndReplace({ "id" : element.id },
                    locToUpdate
                    ).catch((error) => {
                        console.error(error);
                      });
                } catch (error) {
                    console.log(error)
                }
           
                popularTime = undefined;
                }); 
            });
            //client.close();
        })
     }
    }
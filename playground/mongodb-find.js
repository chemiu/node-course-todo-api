// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectId} = require ('mongodb');

var obj = new ObjectId();
console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
         return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find().toArray().then((docs)=>{
    // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    // db.collection('Todos').find({
    //     _id:new ObjectId('5b61772b418b0c129056268f')
    // }).toArray().then((docs)=>{
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos',err)
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //         console.log(`Todos count: ${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch todos',err)
    // });

db.collection('Users').find({
        name:'nachs'
    }).toArray().then((docs)=>{
            console.log('Todos');
            console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos',err)
    });

    // client.close();
});
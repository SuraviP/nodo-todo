// var MongoClient=require('mongodb').MongoClient;
// for destructuring:can pull any property from obj 'mongodb'
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text:'buy books',
	// 	completed:false
	// },(err,result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert todo',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// });


	db.collection('Users').insertOne({
		name:'Ram',
		age:19,
		location:'Delhi'
	},(err,result)=>{
		if(err){
			return console.log('Unable to insert user',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});
	db.close();
});



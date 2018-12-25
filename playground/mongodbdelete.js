const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	// TODOS
	//delete many
	// db.collection('Todos').deleteMany({text:'visit Hagrid'}).then((result)=>{
	// 	console.log(result);
	// });
	//deleteone
	// db.collection('Todos').deleteOne({text:'rescue ginny'}).then((result)=>{
	// 	console.log(result);
	// });
	//find and delete
	// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
	// 	console.log(result);
	// });
	//USERS
	// db.collection('Users').deleteMany({name:'Veer'}).then((result)=>{
	// 	console.log(result);
	// });
	db.collection('Users').findOneAndDelete({name:'Ram'}).then((results)=>{
		console.log(JSON.stringify(results,undefined,2));
	});

	// db.close();
});
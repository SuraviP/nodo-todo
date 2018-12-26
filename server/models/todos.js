var mongoose=require('mongoose');

//TODO
var Todo=mongoose.model('Todo',{
	text:{
		type:String,
		required:true,
		minlength:1,
		trim:true
	},
	completed:{
		type:Boolean,
		default:false
	},
	completedAt:{
		type:Number,
		default:null
	}
});

// var objtodo= new Todo({
// 	text:'make polyjuice potion'
// });


//  objtodo.save().then((doc)=>{
//  	console.log(JSON.stringify(doc,undefined,2));
//  },(e)=>{
//  	console.log('Unable to save todo');
//  });

module.exports={Todo};

// saving to database
// objtodo.save().then((doc)=>{
// 	console.log('Saved todo:',doc);
// },(e)=>{
// 	console.log('Unable to save Todo');
// });

 // var othtodo=new Todo({
 // 	text:'learn patronus charm',
 // 	completed:true,
 // 	completedAt:4

 // });





// var objtodo=new todo({
// 	text:'meet Sirius',
// 	completed:true,
// 	completedAt:5
// });

// objtodo.save().then((doc)=>{
// 	console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
// 	console.log('unable to save todo');
// });

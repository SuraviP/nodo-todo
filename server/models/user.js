var mongoose=require('mongoose');
//USER
var user=mongoose.model('user',{
	email:{
		type:String,
		required:true,
		trim:true,
		minlength:1
	}
});

// var newuser=new user({
// 	email:'abc@gmail.com'
// });

// newuser.save().then((doc)=>{
// 	console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
// 	console.log('unable to save user');
// });

module.exports={user};
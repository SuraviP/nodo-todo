var mongoose=require('mongoose');

//configured mongoose connecting to mongodb database
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports={
	mongoose
};
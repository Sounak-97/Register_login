const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost:27017/student',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},(err)=>
{
    if(err)
    {
        console.log("databse is not connected")
    }
    else{
        console.log("databse is  connected")
    }
})
const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost:27017/Custom',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},(err)=>
{
    if(err)
    {
        console.log("database is not connected")
        console.log(err)
    }
    else{
        console.log("database is  connected")
    }
})
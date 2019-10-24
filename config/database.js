const mongoose=require('mongoose')
mongoose.promise=global.promise
mongoose.connect('mongodb://localhost:27017/notes-app',{useNewUrlParser:true})
.then(()=>{
    console.log('sucessfully connected to db')
})

.catch((err)=>{
    console.log('error connecting to db',err)
})
module.exports=mongoose

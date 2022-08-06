const mongoose=require('mongoose')

const Schema=new mongoose.Schema({
    name:String,
    email:String
})

module.exports=mongoose.model('details',Schema)


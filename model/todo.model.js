const mongoose = require('mongoose')


    /*title: String,
    completed: Boolean, default: false,
    cratedBy: {id: String, name: String}*/

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default: false
    },
    createdBy:{
        id:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        }
    }
})

const Todo = mongoose.model('todos', todoSchema)

module.exports = {Todo}
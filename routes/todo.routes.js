const express = require('express')
const router = express.Router()
const {Todo} = require('../model/todo.model')
 
const user = {
    id: 'dkvmamvfbsfb',
    name: 'mohamed ahmed'
}

router.get('/getTodo', async (req, res) => {

    const todos = await Todo.find()

    res.status(200).json({todos})
})

router.post('/createTodo', async (req, res) => {

    const {title, completed} = req.body

    const todo = new Todo({
        title,
        completed,
        createdBy:{
            id : user.id,
            name : user.name
        }
    })

    await todo.save()
    res.status(200).json({todo})
})

router.put('/updateTodo/:id', async (req, res) => {

    const {id} = req.params
    const {title, completed} = req.body

    const todo = await Todo.findByIdAndUpdate(id, {title, completed})

    if(!todo) return res.status(404).json({msg: 'Todo Not found'})
    res.status(200).json({msg: 'Todo has been updated'})
})


router.delete('/deleteTodo/:id', async (req, res) => {
    const {id} = req.params

    const todo = await Todo.findByIdAndDelete(id)
    if(!todo) return res.status(404).json({msg: 'Todo Not found'})
    res.status(200).json({msg: 'Todo has been deleted'})
})
module.exports = router;
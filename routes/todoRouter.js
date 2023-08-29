const express = require('express')
const todoRoutes = express.Router()
const { v4  } =  require('uuid');

const todoList =[
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: v4()
    },{
        name: "new todo",
        description: "new description",
        imageUrl: "imageURL",
        completed: false,
        _id: v4()
    }
]

todoRoutes.route("/")
.get((req, res, next) => {
    res.send(todoList)
})
.post((req, res) => {
    const newTodo = req.body
    todoList.push(newTodo)
    res.send(todoList)
})

todoRoutes.route('/:todoId')
.delete((req, res)=>{
    const todoId = req.body.params
    const todoIndex = todoList.findIndex(todo => todo._id === todoId)
    todoList.splice(todoIndex, 1)
    res.send("todo deleted")
})
.put((req, res) => {
    const todoId = req.body.params
    const todoIndex = todoList.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todoList[todoIndex], req.body)
    res.send(updatedTodo)
})


module.exports = todoRoutes
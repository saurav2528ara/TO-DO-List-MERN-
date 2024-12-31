const router = require('express').Router()
const Todo = require("../models/Todo")


router.post("/add/todo", (req, res)=>{
    const {todo, description} = req.body;
    const newTodo = new Todo({todo, description})
    
    newTodo.save()
    .then(() => {
        console.log("Successfully add todo!");
        res.redirect("/");
        
    })
    .catch((err) => console.log(err));
})
    .get("/delete/todo/:_id", (req, res) => {
        const {_id} = req.params;
        Todo.deleteOne({_id})
        .then(() => {
            console.log("Deleted Todo Successfully!");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
    })
    


module.exports = router;
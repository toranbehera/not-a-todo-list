import Task from "../models/Task";

async function add(req, res){
    try{
        const task = req.body;

        const newTask = new Task(task);
    }
}

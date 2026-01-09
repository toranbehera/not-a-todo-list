import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {type: String, required: true},
    status: {type: Boolean, required: true}
})

const Task = mongoose.model("Task", taskSchema);

export default Task;

import { useContext, useState } from "react"
import { ReducersContext } from "./TasksContext";
import { type Task } from "../app/features/tasks/tasksSlice";

export default function CreateTask(){
    const [inputText, setInputText] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const {createTask} = useContext(ReducersContext);

    const handleClick = async (task: Task) => {
        setMessage(createTask(task));
    }

    return (
        <div className="sticky">
            <div className="flex sticky bg-white border-1 border-black/10 justify-center gap-4 p-5 shadow-lg">
                <input 
                    className="border-1 rounded-md p-2 shadow-xs"
                    onChange={(e) => setInputText(e.target.value)} 
                    placeholder='enter'
                />
                <button 
                    className="button bg-green-700 hover:bg-green-800"
                    onClick={() => handleClick({name: inputText} as Task)}
                >
                    Create Task
                </button>
            </div>
            {message && 
                <div className="text-center">
                    {message}
                </div>
            }
        </div>
        
    )
}

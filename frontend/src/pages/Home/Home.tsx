import TasksProvider from "../../components/TasksContext.tsx";
import CreateTask from "../../components/CreateTask.tsx";
import TasksList from "../../components/TasksList.tsx";

export default function Home() {
  return (
    <div className="flex justify-center">
      <TasksProvider>
        <CreateTask/>
        <TasksList/>
      </TasksProvider> 
    </div>
  )
}

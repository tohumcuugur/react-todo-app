import { useEffect, useContext } from "react";
import { TaskList } from "./components/task-list/task-list.component";
import { TaskCreate } from "./components/tast-create/task-create.component";
import TaskContext from "./context/task.component";

const App = () => {

  debugger;

  const { fetchTasks } = useContext(TaskContext)

  useEffect(() => {
    fetchTasks();
  }, []);


  return (
    <div>
      <TaskCreate />
      <h3 style={{ textAlign: "center" }}>Görevler</h3>
      <TaskList />
    </div>
  );
}

export default App;

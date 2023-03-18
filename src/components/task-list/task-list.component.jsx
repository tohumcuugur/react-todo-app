import TaskShow from "../task-show/task-show.component";
import "./tast-list.styles.scss"
import { useContext } from "react";
import TaskContext from "../../context/task.component";


export const TaskList = () => {
    const { tasks } = useContext(TaskContext)

    return (
        <div className="centering">
            {
                tasks.map((task, index) => {
                    return (
                        <TaskShow key={index} task={task} />
                    )
                })
            }
        </div>
    )
};

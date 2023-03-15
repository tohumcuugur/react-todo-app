import TaskShow from "../task-show/task-show.component";
import "./tast-list.styles.scss"

export const TaskList = ({ tasks, onDelete, onUpdate }) => {

    return (
        <div className="centering">
            {
                tasks.map((task, index) => {
                    return (
                        <TaskShow key={index} task={task} onDelete={onDelete} onUpdate={onUpdate} />
                    )
                })
            }
        </div>
    )
};

import { useState, useContext } from "react";
import { TaskCreate } from "../tast-create/task-create.component";
import "./task-show.styles.scss"
import TaskContext from "../../context/task.component";

const TaskShow = ({ task }) => {

    const { editTaskById, deleteTaskById } = useContext(TaskContext)

    const [showEdit, setShowEdit] = useState(false)

    const deleteHandler = () => {
        deleteTaskById(task.id)
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }
    const handleSubmit = (id, updatedTitle, updatedTaskDescription) => {
        setShowEdit(false)
        editTaskById(id, updatedTitle, updatedTaskDescription)
    }

    return (
        <div className='task-show-container'>
            {
                showEdit ? <TaskCreate task={task} onUpdate={handleSubmit} taskFormUpdate={true} />
                    :
                    <div className="each-task">
                        <h3>Görev</h3>
                        <p>{task.title}</p>
                        <h3>Yapılacaklar</h3>
                        <p>{task.taskDescription}</p>
                        <div className="buttons">
                            <button onClick={deleteHandler}>Sil</button>
                            <button onClick={handleEditClick}>Güncelle</button>
                        </div>

                    </div>
            }
        </div>
    )
}

export default TaskShow;
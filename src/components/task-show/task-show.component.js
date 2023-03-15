import { useState } from "react";
import { TaskCreate } from "../tast-create/task-create.component";
import "./task-show.styles.scss"

const TaskShow = ({ task, onDelete, onUpdate }) => {

    const { id, title, taskDescription } = task;

    const [showEdit, setShowEdit] = useState(false)

    const deleteHandler = () => {
        onDelete(id)
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }
    const handleSubmit = (id,updatedTitle,updatedTaskDescription) => {
        setShowEdit(false)
        onUpdate(id,updatedTitle,updatedTaskDescription);
    }

    return (
        <div className='task-show-container'>
            {
                showEdit ? <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
                    :
                    <div className="each-task">
                        <h3>Görev</h3>
                        <p>{title}</p>
                        <h3>Yapılacaklar</h3>
                        <p>{taskDescription}</p>
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
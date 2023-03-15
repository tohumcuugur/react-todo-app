import { Fragment, useState } from "react"
import "./task-create.styles.scss"

export const TaskCreate = ({ onCreate, task, taskFormUpdate, onUpdate }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDescription, setTaskDescription] = useState(task ? task.taskDescription : "");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setTaskDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDescription)
    } else {
      onCreate(title, taskDescription);
    }
    setTitle("");
    setTaskDescription("");
  };
  return (
    <Fragment>
      {taskFormUpdate ?
        (<div className="main-container">
          <div className="task-create-container">
            <h3>Lütfen Taskı Düzenleyiniz.</h3>
            <form>
              <label>Başlığı Düzenleyin</label>
              <input className="upd" value={title} onChange={handleChange} type="text" />
              <label>Taskı Düzenleyin</label>
              <textarea className="upd" value={taskDescription} onChange={handleChangeDescription} cols="30" rows="5" />
              <button className="upd-btn" onClick={handleSubmit}>Düzenle</button>
            </form>
          </div>
        </div>)
        :
        (<div className="main-container">
          <div className="task-create-container">
            <h3>Task Ekleyiniz.</h3>
            <form>
              <label>Başlık</label>
              <input value={title} onChange={handleChange} type="text" />
              <label>Açıklama giriniz</label>
              <textarea value={taskDescription} onChange={handleChangeDescription} cols="30" rows="5" />
              <button onClick={handleSubmit}>Oluştur</button>
            </form>
          </div>
        </div>)
      }
    </Fragment>
  )
}

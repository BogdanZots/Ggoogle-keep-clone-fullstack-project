import React, { useState } from "react";
import PropTypes, { func } from "prop-types";
import InputMask from "react-input-mask";
import AddTaskButton from "../AddTaskButton/AddTaskButton";
import TaskInput from "../TaskInput/TaskInput";

const AddNewTaskContainer = ({ addNewTask, completedField }) => {
  const [title, setTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [typeId, setTaskId] = useState("");
  const [endDateForRemind, setEndDateForRemind] = useState("");
  const dataToPost = {
    name: title,
    text: taskDescription,
    typeId,
    endDate: endDateForRemind,
  };
  const clearInputs = () => {
    setTitle("");
    setTaskDescription("");
    setEndDateForRemind("");
  };
  return (
    <div>
      <TaskInput title={title} titleInput setTitle={setTitle} />
      <TaskInput
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
      />
      <div>
        <InputMask
          mask="99-99-9999"
          placeholder="Введите дату в формате dd/yy/mmmm"
          value={endDateForRemind}
          onChange={(e) => {
            setEndDateForRemind(e.target.value);
          }}
        />
      </div>
      <div>
        <select
          onChange={(e) => {
            setTaskId(e.target.value);
          }}
        >
          <option value="Учёба">Учёба</option>
          <option value="Программирование">Программирование</option>
          <option value="Программирование">Работа</option>
        </select>
      </div>
      <div>
        <AddTaskButton
          clearInputs={clearInputs}
          dataToPost={dataToPost}
          completedField={completedField}
          addNewTask={addNewTask}
        />
      </div>
    </div>
  );
};

AddNewTaskContainer.propTypes = {
  addNewTask: PropTypes.func.isRequired,
  completedField: PropTypes.bool,
};

export default AddNewTaskContainer;

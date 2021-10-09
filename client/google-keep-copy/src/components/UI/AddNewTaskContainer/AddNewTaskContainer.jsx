import React, { useState } from "react";
import PropTypes, { func } from "prop-types";
import InputMask from "react-input-mask";
import cn from "classnames";
import AddTaskButton from "../AddTaskButton/AddTaskButton";
import TaskInput from "../TaskInput/TaskInput";
import s from "./AddNewTaskContainer.module.scss";
const AddNewTaskContainer = ({ addNewTask, completedField, userId }) => {
  const [title, setTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [typeId, setTaskId] = useState("");
  const [endDateForRemind, setEndDateForRemind] = useState("");
  const dataToPost = {
    name: title,
    text: taskDescription,
    typeId,
    endDate: endDateForRemind,
    userId,
  };
  const clearInputs = () => {
    setTitle("");
    setTaskDescription("");
    setEndDateForRemind("");
  };
  return (
    <div className={s.task__container}>
      <TaskInput title={title} titleInput setTitle={setTitle} />
      <TaskInput
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
      />
      <div>
        <InputMask
          mask="99-99-9999"
          className={cn(s.Input_text, s.Input_date)}
          placeholder="Введите дату в формате dd/yy/mmmm"
          value={endDateForRemind}
          onChange={(e) => {
            setEndDateForRemind(e.target.value);
          }}
        />
      </div>
      <div className={s.date__container}>
        <label className={s.select} htmlFor="slct">
          <select
            onChange={(e) => {
              setTaskId(e.target.value);
            }}
            id="slct"
            required="required"
          >
            <option value="Учёба" selected>
              Учёба
            </option>
            <option value="Программирование">Программирование</option>
            <option value="Программирование">Работа</option>
          </select>
          <svg>
            <use xlinkHref="#select-arrow-down" />
          </svg>
        </label>
        <svg className={s.sprites}>
          <symbol id="select-arrow-down" viewbox="0 0 10 6">
            <polyline points="1 1 5 5 9 1" />
          </symbol>
        </svg>
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
  userId: PropTypes.number.isRequired,
};

export default AddNewTaskContainer;

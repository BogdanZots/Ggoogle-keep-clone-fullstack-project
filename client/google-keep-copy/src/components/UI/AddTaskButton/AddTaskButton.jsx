import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import s from "./AddTaskButton.module.scss";
import { checkInputFields } from "../../../utils/utils";

const AddTaskButton = ({ dataToPost, addNewTask, completedField }) => {
  let data = {};
  if (completedField) {
    data = { ...dataToPost, isCompleted: false };
  } else {
    data = dataToPost;
  }
  const isDisabled = !checkInputFields(data);
  const dispatch = useDispatch();
  return (
    <div className={s.button__container}>
      <button
        type="button"
        disabled={isDisabled}
        onClick={() => {
          dispatch(addNewTask(data));
        }}
      >
        Add new Task
      </button>
    </div>
  );
};

AddTaskButton.propTypes = {
  dataToPost: PropTypes.shape({ root: PropTypes.string.isRequired }),
  addNewTask: PropTypes.func.isRequired,
  completedField: PropTypes.bool
};

export default AddTaskButton;

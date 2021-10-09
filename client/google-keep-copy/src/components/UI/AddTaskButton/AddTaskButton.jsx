/* eslint-disable no-use-before-define */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import s from "./AddTaskButton.module.scss";
import { checkInputFields } from "../../../utils/utils";

const AddTaskButton = ({
  dataToPost,
  addNewTask,
  completedField,
  clearInputs,
}) => {
  let data = {};
  if (completedField) {
    data = { ...dataToPost, isCompleted: false };
  } else {
    data = dataToPost;
  }
  const isDisabled = !checkInputFields(data);
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <button
        id="botton"
        className={s.button}
        type="button"
        disabled={isDisabled}
        onClick={() => {
          clearInputs();
          dispatch(addNewTask(data));
        }}
      >
        <span>Add new task</span>
        <div className={s.sucess}>
          <svg
            version="1.1"
            viewBox="0 0 29.756 29.756"
          >
            <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
          </svg>
        </div>
      </button>
    </div>
  );
};

AddTaskButton.propTypes = {
  dataToPost: PropTypes.shape({ root: PropTypes.string.isRequired }),
  addNewTask: PropTypes.func.isRequired,
  completedField: PropTypes.bool,
  clearInputs: PropTypes.func.isRequired,
};

export default AddTaskButton;

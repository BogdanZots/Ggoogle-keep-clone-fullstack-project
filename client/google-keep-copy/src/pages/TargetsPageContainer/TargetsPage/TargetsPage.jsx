import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import TaskCard from "../../../components/UI/TaskCard/TaskCard";
import s from "./TargetsPage.module.scss";
import { COMPLETED_TARGETS, TARGETS_URL } from "../../../consts/conts";

const TargetsPage = ({
  targetsTasks,
  removeCurrentTask,
  changeCurrentTask,
  getAllTasks
}) => {
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <div>
        <button
          onClick={() => {
            dispatch(getAllTasks(TARGETS_URL + COMPLETED_TARGETS));
          }}
          type="button"
        >
          Показать выполенные
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(getAllTasks(TARGETS_URL));
          }}
          type="button"
        >
          Показать все
        </button>
      </div>
      {targetsTasks
        ? targetsTasks.map((task) => {
          return (
            <TaskCard
              changeCurrentTask={changeCurrentTask}
              removeCurrentTask={removeCurrentTask}
              task={task}
            />
          );
        })
        : ""}
    </div>
  );
};

TargetsPage.propTypes = {
  targetsTasks: PropTypes.array.isRequired,
  removeCurrentTask: PropTypes.func.isRequired,
  changeCurrentTask: PropTypes.func.isRequired,
  getAllTasks: PropTypes.func.isRequired,
};

export default TargetsPage;

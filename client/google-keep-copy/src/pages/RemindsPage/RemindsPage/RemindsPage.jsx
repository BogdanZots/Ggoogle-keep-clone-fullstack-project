import React from "react";
import PropTypes from "prop-types";
import s from "./RemindsPage.module.scss";
import TaskCard from "../../../components/UI/TaskCard/TaskCard";

const RemindsPage = ({
  remindsTasks,
  removeCurrentTask,
  changeCurrentTask,
}) => (
  <div className={s.tasks}>
    {remindsTasks
      ? remindsTasks.map((task) => (
        <TaskCard
          changeCurrentTask={changeCurrentTask}
          removeCurrentTask={removeCurrentTask}
          task={task}
        />
      ))
      : ""}
  </div>
);

RemindsPage.propTypes = {
  remindsTasks: PropTypes.array.isRequired,
  removeCurrentTask: PropTypes.func.isRequired,
  changeCurrentTask: PropTypes.func.isRequired,
};

export default RemindsPage;

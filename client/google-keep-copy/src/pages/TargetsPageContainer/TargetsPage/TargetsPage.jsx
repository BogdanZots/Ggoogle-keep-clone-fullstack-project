import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import TaskCard from "../../../components/UI/TaskCard/TaskCard";
import s from "./TargetsPage.module.scss";
import { COMPLETED_TARGETS, TARGETS_URL, ITEMS_PER_PAGE } from "../../../consts/conts";
import Paginator from "../../../components/Paginator/Paginator";

const TargetsPage = ({
  targetsTasks,
  removeCurrentTask,
  changeCurrentTask,
  getAllTasks,
  allTargetsCount,
  currentPage
}) => {
  console.log('all targets', allTargetsCount);
  const [URL, setUrl] = useState(TARGETS_URL);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <div>
        <button
          onClick={() => {
            setUrl(TARGETS_URL + COMPLETED_TARGETS);
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
            setUrl(TARGETS_URL);
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
      <Paginator
        URL={URL}
        currentPage={currentPage}
        getAllTasks={getAllTasks}
        pagesCount={allTargetsCount / ITEMS_PER_PAGE}
      />
    </div>
  );
};

TargetsPage.propTypes = {
  targetsTasks: PropTypes.array.isRequired,
  removeCurrentTask: PropTypes.func.isRequired,
  changeCurrentTask: PropTypes.func.isRequired,
  getAllTasks: PropTypes.func.isRequired,
  allTargetsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired

};

export default TargetsPage;

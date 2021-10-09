import React, { useState } from "react";
import PropTypes from "prop-types";
import s from "./TargetsPage.module.scss";
import {
  ALL_TARGETS_PAGE,
  COMPLETED_TARGETS_PAGE,
} from "../../../consts/conts";
import AllTargetsPage from "./AllTargetsPage/AllTargetsPage";
import CompletedTargetsPage from "./CompletedTargetsPage/CompletedTargetsPage";

const TargetsPage = ({
  targetsTasks,
  removeCurrentTask,
  changeCurrentTask,
  allTargetsCount,
  completedTargetsArray,
  currentPage
}) => {
  console.log('t tasks', targetsTasks);
  const [component, setComponent] = useState(ALL_TARGETS_PAGE);
  return (
    <div className={s.container}>
      <div>
        <button
          onClick={() => {
            setComponent(COMPLETED_TARGETS_PAGE);
          }}
          type="button"
        >
          Показать выполенные
        </button>
        {component === ALL_TARGETS_PAGE ? (
          <AllTargetsPage
            targetsTasks={targetsTasks}
            changeCurrentTask={changeCurrentTask}
            removeCurrentTask={removeCurrentTask}
            allTargetsCount={allTargetsCount}
            currentPage={currentPage}
          />
        ) : (
          <CompletedTargetsPage
            targetsTasks={completedTargetsArray}
            changeCurrentTask={changeCurrentTask}
            removeCurrentTask={removeCurrentTask}
            currentPage={currentPage}
          />
        )}
      </div>
      <div>
        <button
          onClick={() => {
            setComponent(ALL_TARGETS_PAGE);
          }}
          type="button"
        >
          Показать все
        </button>
      </div>

    </div>
  );
};

TargetsPage.propTypes = {
  targetsTasks: PropTypes.array.isRequired,
  removeCurrentTask: PropTypes.func.isRequired,
  changeCurrentTask: PropTypes.func.isRequired,
  allTargetsCount: PropTypes.number.isRequired,
  completedTargetsArray: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default TargetsPage;

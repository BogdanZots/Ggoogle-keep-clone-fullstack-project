import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import s from "./CompletedTargetsPage.module.scss";
import TaskCard from "../../../../components/UI/TaskCard/TaskCard";
import Paginator from "../../../../components/Paginator/Paginator";
import { ITEMS_PER_PAGE } from "../../../../consts/conts";
import { setCurrentTargetsPage } from "../../../../store/actions/actions";
function CompletedTargetsPage({
  targetsTasks,
  changeCurrentTask,
  removeCurrentTask,

}) {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((store) => store.targetsPage);
  useEffect(() => {
    dispatch(setCurrentTargetsPage(1));
  }, []);
  console.log('completed', targetsTasks);
  return (
    <div className={s.container}>
      123
      {targetsTasks
        ? targetsTasks.slice(
          currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
          currentPage * ITEMS_PER_PAGE
        ).map((task) => {
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
        serCurrentPageAC={setCurrentTargetsPage}
        pagesCount={targetsTasks.length / ITEMS_PER_PAGE}
      />
    </div>
  );
}

CompletedTargetsPage.propTypes = {
  targetsTasks: PropTypes.array.isRequired,
  changeCurrentTask: PropTypes.func.isRequired,
  removeCurrentTask: PropTypes.func.isRequired,
};

export default CompletedTargetsPage;

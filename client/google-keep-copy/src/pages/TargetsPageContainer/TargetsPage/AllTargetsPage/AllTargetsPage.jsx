import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import s from "./AllTargetsPage.module.scss";
import TaskCard from "../../../../components/UI/TaskCard/TaskCard";
import Paginator from "../../../../components/Paginator/Paginator";
import { ITEMS_PER_PAGE } from "../../../../consts/conts";
import { setCurrentTargetsPage } from "../../../../store/actions/actions";
function AllTargetsPage({
  targetsTasks,
  changeCurrentTask,
  removeCurrentTask,
  allTargetsCount,
  currentPage
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentTargetsPage(1));
  }, []);
  console.log(allTargetsCount);
  return (
    <div className={s.container}>
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

AllTargetsPage.propTypes = {
  targetsTasks: PropTypes.array.isRequired,
  changeCurrentTask: PropTypes.func.isRequired,
  removeCurrentTask: PropTypes.func.isRequired,
  allTargetsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default AllTargetsPage;

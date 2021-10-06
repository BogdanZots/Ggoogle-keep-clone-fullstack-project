import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import AddNewTaskContainer from "../../components/UI/AddNewTaskContainer/AddNewTaskContainer";
import TargetsPage from "./TargetsPage/TargetsPage";
import {
  addNewTask,
  deleteCurrentTask,
  getAllTasks,
  changeCurrentTask,
} from "../../store/reducers/targetsRuducer";
import s from "./TargetsPageContainer.module.scss";
import { COMPLETED_TARGETS, ITEMS_PER_PAGE, TARGETS_URL } from "../../consts/conts";
import Paginator from "../../components/Paginator/Paginator";
import { checkAuth } from "../../store/reducers/userReducer";

const TargetsPageContainer = () => {
  const { targetsArray, allTargetsCount, currentPage } = useSelector(
    (store) => store.targetsPage
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
    dispatch(getAllTasks(TARGETS_URL));
  }, []);
  return (
    <div className={s.container}>
      Цели
      <AddNewTaskContainer addNewTask={addNewTask} completedField />
      <TargetsPage
        getAllTasks={getAllTasks}
        changeCurrentTask={changeCurrentTask}
        removeCurrentTask={deleteCurrentTask}
        targetsTasks={targetsArray}
        currentPage={currentPage}
        allTargetsCount={allTargetsCount}
      />
    </div>
  );
};

TargetsPageContainer.propTypes = {};

export default TargetsPageContainer;

/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
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
import {
  TARGETS_URL,
} from "../../consts/conts";
import {
  setCompletedTargetsArrayAC,
  setCurrentTargetsPage,
} from "../../store/actions/actions";
import SearchPanel from "../../components/SearchPanel/SearchPanel";

const TargetsPageContainer = () => {
  const [searchingTarget, setSearchingTarget] = useState("");
  const { targetsArray, allTargetsCount, completedTargetsArray, currentPage } = useSelector((store) => store.targetsPage);
  const { userId } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks(TARGETS_URL, userId));
    dispatch(setCurrentTargetsPage(1));
    dispatch(setCompletedTargetsArrayAC());
  }, []);
  const filteredTargetsArray = targetsArray.filter((target) => (searchingTarget
    ? target.name.toLowerCase().includes(searchingTarget.toLocaleLowerCase())
    : true));
  const filteredCompletedTargetsArray = completedTargetsArray.filter((target) => (searchingTarget
    ? target.name.toLowerCase().includes(searchingTarget.toLocaleLowerCase())
    : true));
  return (
    <div className={s.container}>
      Цели
      <SearchPanel
        searchingTarget={searchingTarget}
        setSearchingTarget={setSearchingTarget}
      />
      <AddNewTaskContainer
        userId={userId}
        addNewTask={addNewTask}
        completedField
      />
      <TargetsPage
        getAllTasks={getAllTasks}
        changeCurrentTask={changeCurrentTask}
        removeCurrentTask={deleteCurrentTask}
        completedTargetsArray={filteredCompletedTargetsArray}
        targetsTasks={filteredTargetsArray}
        currentPage={currentPage}
        userId={userId}
        allTargetsCount={allTargetsCount}
      />
    </div>
  );
};

TargetsPageContainer.propTypes = {};

export default TargetsPageContainer;

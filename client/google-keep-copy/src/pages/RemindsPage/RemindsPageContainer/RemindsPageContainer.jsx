/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddNewTaskContainer from "../../../components/UI/AddNewTaskContainer/AddNewTaskContainer";
import s from "./RemindsPageContainer.module.scss";
import { getTimeToTaskEnd } from "../../../utils/utils";
import Paginator from "../../../components/Paginator/Paginator";
import {
  getAllTasks,
  addNewTask,
  deleteCurrentTask,
  changeCurrentTask,
} from "../../../store/reducers/remindsReducer";
import RemindsPage from "../RemindsPage/RemindsPage";
import { ITEMS_PER_PAGE, REMINDS_URL } from "../../../consts/conts";
import { setCurrentRemindsPage } from "../../../store/actions/actions";
import SearchPanel from "../../../components/SearchPanel/SearchPanel";
import Bell from "../../../components/UI/Bell/Bell";

export default function RemindsPageContainer() {
  const [searchingTarget, setSearchingTarget] = useState("");
  const { remindsArray, deadlineArray, currentPage } = useSelector(
    (store) => store.remindsPage
  );
  const { userId } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks(REMINDS_URL, userId));
  }, []);
  const filteredTargetsArray = remindsArray.filter((target) => (searchingTarget
    ? target.name.toLowerCase().includes(searchingTarget.toLocaleLowerCase())
    : true));

  return (
    <div className={s.container}>
      <div className={s.reminds__descr}>
        <h2 className={s.title}>Reminds </h2>
        <SearchPanel
          searchingTarget={searchingTarget}
          setSearchingTarget={setSearchingTarget}
        />
      </div>
      <Bell deadlines={deadlineArray} />
      <AddNewTaskContainer userId={userId} addNewTask={addNewTask} />
      <RemindsPage
        changeCurrentTask={changeCurrentTask}
        removeCurrentTask={deleteCurrentTask}
        remindsTasks={filteredTargetsArray.slice(
          currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
          currentPage * ITEMS_PER_PAGE
        )}
      />
      <Paginator
        serCurrentPageAC={setCurrentRemindsPage}
        pagesCount={filteredTargetsArray.length / ITEMS_PER_PAGE}
      />
    </div>
  );
}

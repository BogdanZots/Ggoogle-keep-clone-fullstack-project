import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddNewTaskContainer from "../../../components/UI/AddNewTaskContainer/AddNewTaskContainer";
import s from "./RemindsPageContainer.module.scss";
import { getEndTaskTimeWeek, getTimeToTaskEnd } from "../../../utils/utils";
import {
  getAllTasks,
  addNewTask,
  deleteCurrentTask,
  changeCurrentTask,
} from "../../../store/reducers/remindsReducer";
import RemindsPage from "../RemindsPage/RemindsPage";

export default function RemindsPageContainer() {
  const { remindsArray, deadlineArray } = useSelector(
    (store) => store.remindsPage
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks());
  }, []);
  console.log(deadlineArray);
  return (
    <div className={s.container}>
      Reminds
      <div>
        Deadlines
        {deadlineArray.map((task) => {
          const endDate = getTimeToTaskEnd(task.endDate.split("-"));
          return (
            <li>
              {endDate < 7 ? `Таск ${task.name} закончиться менее чем через 7 дней` : ""}
            </li>
          );
        })}
      </div>
      <AddNewTaskContainer addNewTask={addNewTask} />
      <RemindsPage
        changeCurrentTask={changeCurrentTask}
        removeCurrentTask={deleteCurrentTask}
        remindsTasks={remindsArray}
      />
    </div>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import EditImg from '../EditImg/EditImg';
import DeleteImg from '../DeleteImg/DeleteImg';
import s from "./TaskCard.module.scss";
import { changeTargetsItemStatusAC } from '../../../store/actions/actions';
import { changeTaskCompletedStatus } from '../../../store/reducers/targetsRuducer';
const TaskCard = ({ task, removeCurrentTask, changeCurrentTask }) => {
  const dispatch = useDispatch();
  return (
    <div key={task.id} className={s.task}>
      <div className={s.task__title}>
        Название задачи :
        {task.name}
      </div>
      <div className={s.task__text}>
        Описание
        {task.text}
      </div>
      <div className={s.task__date}>
        Время окончания
        {task.endDate}
      </div>
      {Object.prototype.hasOwnProperty.call(task, 'isCompleted') ? (
        <div>
          <input
            type="checkbox"
            onChange={() => {
              dispatch(changeTaskCompletedStatus({ id: task.id, isCompleted: !task.isCompleted }));
            }}
            checked={task.isCompleted}
          />
        </div>
      ) : "" }
      <div className={s.task__type}>
        Тип задачи :
        {task.typeId ? task.typeId : "Отсувствует"}
      </div>
      <div className={s.editing__actions}>
        <EditImg
          changeCurrentTask={changeCurrentTask}
          endDate={task.endDate}
          typeId={task.typeId}
          taskName={task.name}
          taskDescription={task.text}
          isCompleted={task.isCompleted}
          uId={task.id}
        />
        <DeleteImg removeCurrentTask={removeCurrentTask} uId={task.id} />
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  removeCurrentTask: PropTypes.func.isRequired,
  changeCurrentTask: PropTypes.func.isRequired
};

export default TaskCard;

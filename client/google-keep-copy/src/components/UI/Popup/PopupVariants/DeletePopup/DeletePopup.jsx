import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import s from "./DeletePopup.module.scss";

const DeletePopup = ({ setPopupVisible, uId, popupVisible, removeCurrentTask }) => {
  const dispatch = useDispatch();
  const deleteTask = () => {
    dispatch(removeCurrentTask(uId));
    setPopupVisible(!popupVisible);
  };
  return (
    <div>
      <h1>Вы уверены что хотите удалить ? </h1>
      <span>
        После удаления эту хуйню мб можно будет вернуть но это не точно :))
      </span>
      <button type="button" onClick={deleteTask}>
        Удалить
      </button>
    </div>
  );
};

DeletePopup.propTypes = {
  setPopupVisible: PropTypes.func.isRequired,
  uId: PropTypes.number.isRequired,
  popupVisible: PropTypes.bool.isRequired,
  removeCurrentTask: PropTypes.func.isRequired
};

export default DeletePopup;

import React, { useState } from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import s from "./EditPopup.module.scss";

const EditPopup = ({
  uId,
  typeId,
  taskName,
  changeCurrentTask,
  popupVisible,
  taskDescription,
  setPopupVisible,
  endDate,
}) => {
  const [description, setDescription] = useState(taskDescription);
  const [title, setTitle] = useState(taskName);
  const [endDateEdited, setEndDateEdited] = useState(endDate);
  const dispatch = useDispatch();
  const changeInputValue = (value, inputName) => {
    if (inputName === "title") {
      setTitle(value);
      return;
    }
    setDescription(value);
  };
  return (
    <>
      {" "}
      <input
        onChange={(e) => {
          changeInputValue(e.target.value, "title");
        }}
        value={title}
      />
      <input
        onChange={(e) => changeInputValue(e.target.value, "description")}
        value={description}
      />
      <InputMask
        mask="99-99-9999"
        placeholder="Введите дату в формате dd/yy/mmmm"
        value={endDateEdited}
        onChange={(e) => {
          setEndDateEdited(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={(e) => {
          const data = {
            id: uId,
            newData: {
              id: uId,
              text: description,
              name: title,
              typeId,
              endDate: endDateEdited,
              searchId: uId,
            },
          };

          dispatch(changeCurrentTask({ ...data }));
          setPopupVisible(!popupVisible);
        }}
      >
        Готово
      </button>
    </>
  );
};

EditPopup.propTypes = {
  uId: PropTypes.number.isRequired,
  typeId: PropTypes.string.isRequired,
  taskName: PropTypes.string.isRequired,
  popupVisible: PropTypes.bool.isRequired,
  taskDescription: PropTypes.string.isRequired,
  setPopupVisible: PropTypes.func.isRequired,
  endDate: PropTypes.string.isRequired,
  changeCurrentTask: PropTypes.func.isRequired,
};

export default EditPopup;

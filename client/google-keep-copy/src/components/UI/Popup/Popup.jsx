import React, { useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { useDispatch } from "react-redux";
import s from "./Popup.module.scss";
import EditPopup from "./PopupVariants/EditPopup/EditPopup";
import DeletePopup from "./PopupVariants/DeletePopup/DeletePopup";
const Popup = ({
  deleteAction,
  editAction,
  uId,
  changeCurrentTask,
  taskName,
  taskDescription,
  setPopupVisible,
  typeId,
  popupVisible,
  endDate,
  removeCurrentTask
}) => {
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup__container')) {
        setPopupVisible(!popupVisible);
      }
    });
  }, []);
  const dispatch = useDispatch();

  return (
    <>
      <div id="popup" className={cn("popup__container", s.container)} />
      <div className={cn(s.popup)}>
        {editAction ? (
          <EditPopup
            endDate={endDate}
            taskName={taskName}
            dispatch={dispatch}
            uId={uId}
            taskDescription={taskDescription}
            setPopupVisible={setPopupVisible}
            typeId={typeId}
            popupVisible={popupVisible}
            changeCurrentTask={changeCurrentTask}
          />
        ) : (
          ""
        )}
        {deleteAction ? (
          <DeletePopup
            popupVisible={popupVisible}
            setPopupVisible={setPopupVisible}
            uId={uId}
            dispatch={dispatch}
            removeCurrentTask={removeCurrentTask}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

Popup.propTypes = {
  deleteAction: PropTypes.func.isRequired,
  editAction: PropTypes.func.isRequired,
  uId: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired,
  taskDescription: PropTypes.string.isRequired,
  setPopupVisible: PropTypes.func.isRequired,
  typeId: PropTypes.string.isRequired,
  popupVisible: PropTypes.bool.isRequired,
  endDate: PropTypes.string.isRequired,
  removeCurrentTask: PropTypes.func.isRequired,
  changeCurrentTask: PropTypes.func.isRequired
};

export default Popup;

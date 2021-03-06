/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import s from "./Bell.module.scss";
import { getTimeToTaskEnd } from "../../../utils/utils";
export default function Bell({ deadlines }) {
  const [popup, setPopupVisible] = useState(false);
  const change = () => {
    setPopupVisible(!popup);
  };
  console.log(popup);
  return (
    <div role="button" onClick={change} className={s.bell_container}>
      {popup ? (
        <div className={s.bell_popup}>
          <h2 className={s.title}>
            Bell Popup
          </h2>
          {deadlines.map((task) => {
            const endDate = getTimeToTaskEnd(task.endDate.split("-"));
            return (
              <>
                {Math.abs(endDate) < 7 ? (
                  <li>
                    Таск
                    {task.name}
                    {' '}
                    закончиться менее чем через
                    {' '}
                    {Math.abs(endDate)}
                    {" "}
                    cуток
                  </li>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      ) : (
        ""
      )}
      <svg
        className={s.bell}
        enableBackground="new 0 0 128 128"
        height="24px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 128 128"
        width="24px"
      >
        <path
          d="M114.289,80.164c-1.805-3.156-3.891-10.664-5.328-15.836c-4.063-14.617-10.352-37.18-29.266-45.281  C79.883,18.055,80,17.039,80,16c0-8.836-7.164-16-16-16S48,7.164,48,16c0,1.039,0.117,2.055,0.305,3.047  c-18.914,8.102-25.203,30.664-29.266,45.281c-1.438,5.172-3.523,12.68-5.328,15.836C5.961,81.273,0,87.938,0,96  c0,8.836,7.164,16,16,16h32c0,8.836,7.164,16,16,16s16-7.164,16-16h32c8.836,0,16-7.164,16-16  C128,87.938,122.039,81.273,114.289,80.164z M112,104H64H16c-4.414,0-8-3.586-8-8c0-3.953,2.945-7.359,6.844-7.914  c2.445-0.352,4.586-1.813,5.813-3.953c2.125-3.719,4.016-10.195,6.094-17.664C30.453,53.141,36.047,33,51.453,26.398  c3.453-1.477,5.406-5.148,4.711-8.836C56.055,16.969,56,16.461,56,16c0-4.414,3.586-8,8-8s8,3.586,8,8  c0,0.461-0.055,0.969-0.164,1.563c-0.695,3.688,1.258,7.359,4.711,8.836c15.406,6.602,21,26.742,24.711,40.086  c2.07,7.453,3.961,13.93,6.086,17.648c1.227,2.141,3.367,3.602,5.813,3.953C117.055,88.641,120,92.047,120,96  C120,100.414,116.414,104,112,104z"
          fill="white"
        />
      </svg>
    </div>
  );
}

Bell.propTypes = {
  deadlines: PropTypes.array.isRequired,
};

/* eslint-disable prefer-destructuring */
/* eslint-disable semi */
/* eslint-disable guard-for-in */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable valid-typeof */
export const getCurrentWeek = (currentDate) => {
  const firstDay = new Date(currentDate);
  const nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);
  return nextWeek;
};
export const getEndTaskTimeWeek = (date) => {
  // получаю время окончания таска
  const time = new Date(date);
  const nextWeek = new Date(time.getTime() + 7 * 24 * 60 * 60 * 1000);
  console.log(date / (7 * 24 * 60 * 60 * 1000));
  return nextWeek;
};

export const getTimeToTaskEnd = (date) => {
  const day = Number(date[0]);
  const month = Number(date[1]);
  const year = Number(date[2]);
  const currentDate = new Date();
  const endDate = new Date(year, month - 1, day);
  const resultDate = Math.ceil((endDate - currentDate) / (24 * 60 * 60 * 1000));
  return resultDate;
};

export const checkInputFields = (data) => {
  const objData = { ...data };
  delete objData.typeId;
  const { name, text } = objData;
  const Date = {
    day: Number(objData.endDate.split("-")[0]),
    month: Number(objData.endDate.split("-")[1]),
    year: Number(objData.endDate.split("-")[2]),
  };

  const checkTitle = () => {
    return name.length !== 0;
  };
  const checkDescription = () => {
    return text.length !== 0;
  };
  const checkDate = () => {
    if (Date && Object.keys(Date).length !== 0) {
      if (
        typeof Date.day === "number"
        && Date.day.toLocaleString().length === 2
        && typeof Date.month === "number"
        && Date.month.toLocaleString().length === 2
        && typeof Date.year === "number"
        && Date.year.toLocaleString().length === 5
      ) {
        return true;
      }
    }
    return false;
  };
  const result = checkTitle() && checkDescription() && checkDate();
  return result;
};

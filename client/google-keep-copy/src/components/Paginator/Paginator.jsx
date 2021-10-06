/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import cn from "classnames";
import s from "./Paginator.module.scss";
import { ITEMS_PER_PAGE, TARGETS_URL } from "../../consts/conts";
function Paginator({ pagesCount, getAllTasks, URL/* , currentPage */ }) {
  const [nextPortion, setNextPortion] = useState(3);
  const [prevPortion, setPrevPortion] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  console.log('pages count', pagesCount);
  const dispatch = useDispatch();
  const setNext = () => {
    setNextPortion(nextPortion + 3);
    setPrevPortion(prevPortion + 3);
  };
  const setPrev = () => {
    setNextPortion(nextPortion - 3);
    setPrevPortion(prevPortion - 3);
  };
  const pages = [];
  for (let i = 0; i < pagesCount; i++) {
    pages.push(i);
  }
  console.log('pages', pages);
  return (
    <div>
      <li><button disabled={nextPortion === 3} onClick={() => setPrev()} type="button">Prev</button></li>
      {pages.filter((page) => page < nextPortion && page >= prevPortion).map((page) => {
        const pageNum = page + 1;
        return (
          <>
            <li>
              <button
                onClick={() => {
                  const currentPageNum = page + 1;
                  setCurrentPage(currentPageNum);
                  dispatch(getAllTasks(URL, ITEMS_PER_PAGE, currentPageNum));
                }}
                type="button"
              >
                <span className={currentPage === pageNum ? s.active : ""}>{page + 1}</span>
              </button>
            </li>
          </>
        );
      })}
      <li><button onClick={() => setNext()} disabled={pages.length <= nextPortion} type="button">Next</button></li>
    </div>
  );
}

Paginator.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  getAllTasks: PropTypes.func.isRequired,
  /*   currentPage1: PropTypes.number.isRequired, */
  URL: PropTypes.string.isRequired,
};

export default Paginator;

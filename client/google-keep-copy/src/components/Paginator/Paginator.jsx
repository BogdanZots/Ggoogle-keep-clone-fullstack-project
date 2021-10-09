/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import cn from "classnames";
import s from "./Paginator.module.scss";
function Paginator({ pagesCount, serCurrentPageAC }) {
  console.log("p contun", pagesCount);
  const [nextPortion, setNextPortion] = useState(3);
  const [prevPortion, setPrevPortion] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
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
  return (
    <>
      <div className={s.paginator__container}>
        <ul className={s.page}>
          <button
            disabled={nextPortion === 3}
            onClick={() => setPrev()}
            type="button"
            className={s.button}
          >
            <span className={cn(s.material_icons, s.chevron_left)} />
            Prev
          </button>
          {pages
            .filter((page) => page < nextPortion && page >= prevPortion)
            .map((page) => {
              const pageNum = page + 1;
              return (
                <>
                  <li>
                    <button
                      onClick={() => {
                        const currentPageNum = page + 1;
                        dispatch(serCurrentPageAC(currentPageNum));
                        setCurrentPage(currentPageNum);
                      }}
                      className={s.button}
                      type="button"
                    >
                      <span
                        className={cn(
                          s.page__numbers,
                          currentPage === pageNum ? s.active : ""
                        )}
                      >
                        {page + 1}
                      </span>
                    </button>
                  </li>
                </>
              );
            })}
          <button
            onClick={() => setNext()}
            type="button"
            disabled={pages.length <= nextPortion}
            className={s.button}
          >
            <span className={cn(s.material_icons, s.chevron_right)} />
            Next
          </button>
        </ul>
      </div>
    </>
  );
}

Paginator.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  serCurrentPageAC: PropTypes.func.isRequired,
};

export default Paginator;

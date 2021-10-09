import React from "react";
import PropTypes from "prop-types";
import s from "./SearchPanel.module.scss";

function SearchPanel({ searchingTarget, setSearchingTarget }) {
  return (
    <div className={s.search__container}>
      <input
        type="text"
        id="input"
        className={s.Input_text}
        placeholder="Найти задачу ..."
        value={searchingTarget}
        onChange={(e) => setSearchingTarget(e.target.value)}
      />
    </div>
  );
}

SearchPanel.propTypes = {
  setSearchingTarget: PropTypes.func.isRequired,
  searchingTarget: PropTypes.string.isRequired,
};

export default SearchPanel;

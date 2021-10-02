import React from "react";
import PropTypes from "prop-types";

const TaskInput = ({
  title,
  titleInput,
  setTitle,
  taskDescription,
  setTaskDescription,
}) => (
  <>
    {titleInput ? (
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Опишите заголовок"
        />
      </div>
    ) : (
      <div>
        <input
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Опишите Задачу"
        />
      </div>
    )}
  </>
);

TaskInput.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  taskDescription: PropTypes.string.isRequired,
  setTaskDescription: PropTypes.func.isRequired,
  titleInput: PropTypes.bool.isRequired
};

export default TaskInput;

import { useState, useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const TagButton = (props) => {
  const { taskList, setTaskList } = useContext(TodoContext);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  function handleTagChange(tagName) {
    setSelectedTag((prevSelectedTag) =>
      prevSelectedTag === tagName ? null : tagName
    );

    if (isChecked === true) {
      const newList = [...taskList].filter((task) =>
        task.tags.includes(tagName)
      );
      setTaskList(newList);
    } else {
      const newList = [...taskList];

      setTaskList(newList);
    }
  }

  return (
    <input
      type="radio"
      name="category"
      value={props.tag}
      checked={selectedTag === props.tag}
      onChange={() => handleTagChange(props.tag)}
    />
  );
};

export default TagButton;

import { useState, useContext, useEffect } from "react";
import {
  Container,
  CategoryWrapper,
  CategoryCard,
  TagWrapper,
  Label,
  Checkbox,
  CategoryLabel
} from "./Category.styles";
import { uid } from "uid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TodoContext } from "../../contexts/TodoContext";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Category = (props) => {
  const [selectedTagName, setSelectedTagName] = useState(null);
  const [selectedTagId, setSelectedTagId] = useState(null);
  const {
    taskList,
    setFilteredList,
    categoryDropdown,
    setCategoryDropdown
  } = useContext(TodoContext);

  const showDropdown = (e) => {
    e.stopPropagation();
    setCategoryDropdown(!categoryDropdown);
  };

  const handleTagClick = (tagId, tagName) => {
    if (selectedTagId === tagId) {
      setSelectedTagId(null);
      setSelectedTagName(null);
    } else {
      setSelectedTagId(tagId);
      setSelectedTagName(tagName);
    }
  };

  useEffect(() => {
    const newFilteredTodos = taskList.filter((todo) =>
      selectedTagName !== null
        ? todo.tags.some((tag) => tag.name === selectedTagName)
        : true
    );

    setFilteredList(newFilteredTodos);
  }, [selectedTagName]);

  return (
    <div style={{ position: "relative" }}>
      <Container onClick={showDropdown}>
        <Label>Category</Label>
        {!categoryDropdown && <FontAwesomeIcon icon={faChevronDown} />}
        {categoryDropdown && <FontAwesomeIcon icon={faChevronUp} />}
      </Container>
      {categoryDropdown && taskList && (
        <CategoryCard>
          {taskList.map((task) => (
            <CategoryWrapper key={uid()}>
              {task.tags.map((tag) => (
                <TagWrapper key={tag.id}>
                  <CategoryLabel>
                    {tag.name}
                    <Checkbox
                      type="checkbox"
                      name="category"
                      value={tag.name}
                      id={tag.id}
                      checked={selectedTagId === tag.id}
                      onChange={() => handleTagClick(tag.id, tag.name)}
                    />
                  </CategoryLabel>
                </TagWrapper>
              ))}
            </CategoryWrapper>
          ))}
        </CategoryCard>
      )}
    </div>
  );
};

export default Category;

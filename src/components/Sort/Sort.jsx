import { Container, SortOption, Div, Input } from "./Sort.styles";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-brands-svg-icons"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../../contexts/TodoContext";

const Sort = (props) => {
  // const [dropdown, setDropdown] = useState(false);
  const [checked, setChecked] = useState("");

  const { taskList, setTaskList, dropdown, setDropdown } = useContext(
    TodoContext
  );
  const showDropdown = (e) => {
    e.stopPropagation();
    setDropdown(!dropdown);
  };

  // Under construction lol
  //
  return (
    <div>
      <Container onClick={showDropdown}>
        <label style={{ fontFamily: "inter", cursor: "pointer" }}>Sort</label>
        {dropdown === false && <FontAwesomeIcon icon={faChevronDown} />}
        {dropdown === true && <FontAwesomeIcon icon={faChevronUp} />}
      </Container>
      {dropdown === true && (
        <form
          style={{
            position: "absolute",
            boxShadow: "1px 1px 10px grey",
            borderRadius: "10px"
          }}
        >
          <Div>
            {/* Why is this instantly getting called? */}
            <SortOption>
              <p>Default</p>
              <Input
                type="radio"
                name="sort"
                checked={props.checked === "Default"}
                onClick={showDropdown}
                onChange={(e) => props.handleAscendSort(e.target.value, e)}
                value="created"
              />
            </SortOption>
            <SortOption>
              <p>Ascending Date</p>
              <Input
                type="radio"
                name="sort"
                onClick={showDropdown}
                checked={props.checked === "Ascending Date"}
                onChange={(e) => props.handleAscendSort(e.target.value, e)}
                // checked={checked === "Ascending Date"}
                value="DateTimeObject"
              />
            </SortOption>
            <SortOption>
              <p>Descending Date</p>
              <Input
                type="radio"
                name="sort"
                onClick={showDropdown}
                checked={props.checked === "Descending Date"}
                onChange={(e) => props.handleDescendSort(e.target.value, e)}
                // checked={checked === "Descending Date"}
                value="DateTimeObject"
              />
            </SortOption>
            <SortOption>
              <p>Ascending Complexity</p>
              <Input
                type="radio"
                name="sort"
                onClick={showDropdown}
                checked={props.checked === "Ascending Complexity"}
                onChange={(e) => props.handleAscendSort(e.target.value, e)}
                // checked={checked === "Ascending Complexity"}
                value="complexity"
              />
            </SortOption>
            <SortOption>
              <p>Descending Complexity</p>
              <Input
                type="radio"
                name="sort"
                onClick={showDropdown}
                checked={props.checked === "Descending Complexity"}
                onChange={(e) => props.handleDescendSort(e.target.value, e)}
                // checked={checked === "Descending Complexity"}
                value="complexity"
              />
            </SortOption>
            <SortOption>
              <p>Ascending Priority</p>
              <Input
                type="radio"
                name="sort"
                onClick={showDropdown}
                checked={props.checked === "Ascending Priority"}
                onChange={(e) => props.handleAscendSort(e.target.value, e)}
                // checked={checked === "Ascending Priority"}
                value="priority"
              />
            </SortOption>
            <SortOption>
              <p>Descending Priority</p>
              <Input
                type="radio"
                name="sort"
                onClick={showDropdown}
                checked={props.checked === "Descending Priority"}
                onChange={(e) => props.handleDescendSort(e.target.value, e)}
                // checked={checked === "Descending Priority"}
                value="priority"
              />
            </SortOption>
          </Div>
        </form>
      )}
    </div>
  );
};

export default Sort;

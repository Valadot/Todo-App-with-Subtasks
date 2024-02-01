import { TextInput, Button } from "./AddChecklistItem.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const AddChecklistItem = ({
  value,
  handleSubtaskChange,
  task,
  deleteSubtask,
}) => {
  return (
    <div style={{ position: "relative" }}>
      <Button onClick={(e) => deleteSubtask(e, task.subtaskID)}>
        <FontAwesomeIcon icon={faXmark} />
      </Button>
      <TextInput
        defaultValue={value}
        onChange={(e) => handleSubtaskChange(e, task.subtaskID)}
      />
    </div>
  );
};

export default AddChecklistItem;

import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

import {
  ButtonContainer,
  Button,
  PowermodeExplanation
} from "./Powermode.styles";

const Powermode = ({ filterList }) => {
  const { powermode, setPowerMode } = useContext(TodoContext);

  const handlePowermode = () => {
    setPowerMode(!powermode);

    filterList();
  };

  return (
    <>
      <ButtonContainer>
        <Button
          onClick={handlePowermode}
          whileHover={{ scale: 1.1, fontWeight: 700 }}
          whileTap={{ scale: 0.9 }}
        >
          {powermode ? "Power Mode off" : "Power Mode on"}
        </Button>
      </ButtonContainer>
      <PowermodeExplanation>
        {powermode
          ? "Power mode is on, filtering is disabled and only the tasks with highest priority and complexity combined are getting shown"
          : ""}
      </PowermodeExplanation>
    </>
  );
};

export default Powermode;

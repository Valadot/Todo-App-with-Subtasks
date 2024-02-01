import { Container, Input, Form, Button } from "./Searchbar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({ handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <Input placeholder="Search..." id="serach" onChange={handleChange} />
        <div>
          <Button>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </Container>
    </Form>
  );
};

export default Searchbar;

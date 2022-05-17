import React from "react";
import styled from "styled-components";
import Checkbox from "./checkbox";

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.todoInputBackground};
  border-radius: 4px;
  box-shadow: 0 1px 4px 0px #00000042;
  margin-bottom: 1.5vw;
  
  

  input[type="text"] {
    flex: 1;
    border: hidden;
    outline: none;
    background: none;
    color: ${(props) => props.theme.pageColor};
  }

  form {
    display: flex;
    flex: 1;
    height: 50px;
    align-items: center;
    justify-content: center;
    
  }
`;

function TodoForm({ handleSubmit, handleChange, todo, handleCompleted, isCompleted }) {
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
      <Checkbox onChange={() => {}} checked={false} styleClass={'disabled'}/>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={todo}
          onChange={handleChange}
        />
      </form>
    </FormContainer>
  );
}

export default TodoForm;

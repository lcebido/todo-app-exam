import { useState } from "react";
import styled from "styled-components";
import TodoForm from "./todo-component/todoForm";
import TodoItem from "./todo-component/todoItem";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: top;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease;
  max-width: 500px;
  width: 90vw;
  margin-top: 5vw;
`;
const Title = styled.div`
  display: flex;
  width: -webkit-fill-available;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const Toggle = styled.div``;
const ImageToggle = styled.img`
  content: url("images/${(props) => props.theme.themeIconToggle}");
`;
const TextBottom = styled.div`
  margin-top: 2vw;
  font-size: 14px;
`;


const Todo = ({theme, setTheme}) => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [todoDrag, updateTodoDrag] = useState(todos);
 
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
        id: new Date().getTime(), // for unique ID purpose only
        text: todo,
        completed: false,
    }
    setTodos([newTodo,...todos])
    setTodo('')
  };

  const  deleteTodo= (id) => {
    const updatedTodo = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodo)
  }
  const  clearCompleted = () => {
    const updatedTodo = [...todos].filter((todo) => todo.completed !== true)
    setTodos(updatedTodo)
  }
  const toggleComplete = (id) => {
    const updatedTodo = [...todos].map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodo)
  }
  const  handleDragEnd = (result) => {
    if(!result.destination) return;
    const todosItem = Array.from(todos);
    const [reorderedItem] = todosItem.splice(result.source.index, 1);
    todosItem.splice(result.destination.index, 0, reorderedItem);
    setTodos(todosItem)
  }

  
  return (
    <Container>
      <Title>
        <h1> TODO </h1>
        <Toggle onClick={setTheme}>
          <ImageToggle alt="theme toggle" />
        </Toggle>
      </Title>
      <TodoForm  theme={theme} handleSubmit={handleSubmit} handleChange={handleChange} todo={todo} todos={todos}  />
      <TodoItem  theme={theme} todos={todos} todoDrag={todoDrag} deleteTodo={deleteTodo} toggleComplete={toggleComplete} clearCompleted={clearCompleted} handleDragEnd={handleDragEnd}/>
      {
        todos.length>1 ? <TextBottom>Drag and drop to reorder List</TextBottom> : ""
      }
    </Container>
  );
};
export default Todo;

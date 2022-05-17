import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Checkbox from "./checkbox";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



const UlContainer = styled.ul`
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.todoInputBackground};
  border-radius: 4px;
  box-shadow: 0 1px 4px 0px #00000042;
  flex-direction: column;
`
const SortContainer = styled.li`
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.todoInputBackground};
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  height: 50px;
  .desktop-responsive{
    width:100%;
  }
  .mobile-responsive{
    width:100%;
    .text-container{
      flex:1;
    }
  }
  
`
const DesktopContainer = styled.div`
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.todoInputBackground};
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  height: 50px;
  .text-container{
    color: ${(props) => props.theme.textInActive}; 
    width:20%;
    padding-left: 15px;
  }

  .btn-clearcompleted{
    padding-right: 15px;
  }
`
const MobileContainer = styled.div`
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.todoInputBackground};
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  height: 50px;
  box-shadow: 0 1px 4px 0px #00000042;
  margin-top: 1.5vw;
  .mobile-responsive{
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
`
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-bottom: ${(props) => props.theme.outLine};
  color: ${(props) => props.theme.pageColor};
  background:${(props) => props.theme.todoInputBackground};
  border-radius: 4px;
  
  .isCompleted{
    text-decoration: line-through;
    color: ${(props) => props.theme.isCompleted};
  }
  `
  const CheckTodo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `
  const TextTodo = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
const DeleteTodo = styled.div`
  width: 20px;
  Height: 20px;
  margin: 10px;
  cursor: pointer;
  
`


function TodoItem({ todos, deleteTodo, toggleComplete, clearCompleted, handleDragEnd , todoDrag}) {
  const [groupTodoList, setTodoGroupList] = useState("All");


  const filteredTodos = todos.filter((todo) => {
    if (groupTodoList === "All") {
      return todo;
    } else if (groupTodoList === "Active" && todo.completed === false) {
      return todo;
    } else if (groupTodoList === "Completed" && todo.completed === true) {
      return todo;
    }
  });

  const activeCount = todos.filter((todo) => {
    if (todo.completed === false) return todo;
  });



  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todoItem">
        {(provided) => (
        <UlContainer {...provided.droppableProps} ref={provided.innerRef}>
          {filteredTodos.map((todo, index) => (
            <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
              {(provided)=>(
                <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <Item>
                  <CheckTodo>
                    <Checkbox onChange={() => toggleComplete(todo.id)} checked={todo.completed}/>
                  </CheckTodo>
                  <TextTodo onClick={() => toggleComplete(todo.id)} className={todo.completed ? "isCompleted" : ""}>{todo.text}</TextTodo>
                  <DeleteTodo onClick={() => deleteTodo(todo.id)}><img src="images/icon-cross.svg" /></DeleteTodo>
                </Item>
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
          {todos.length > 0 ? 
            (<>
            <SortContainer className="desktop-responsive d-none d-lg-block d-xl-block d-md-block">
              <div className="desktop-responsive">
                <DesktopContainer>
                  <div className="text-container">
                    {activeCount.length} {activeCount.length > 1 ? "items left" : "item left"}
                  </div>
                  <div>
                    <button className={`button ${groupTodoList === "All" ? 'active' : ''} `} onClick={() => setTodoGroupList("All")}>All</button>
                    <button className={`button ${groupTodoList === "Active" ? 'active' : ''} `} onClick={() => setTodoGroupList("Active")}>Active</button>
                    <button className={`button ${groupTodoList === "Completed" ? 'active' : ''} `} onClick={() => setTodoGroupList("Completed")}>
                      Complete
                    </button>
                  </div>
                  <div>
                    <button className="button btn-clearcompleted" onClick={() => clearCompleted()}>Clear Completed</button>
                  </div>
                </DesktopContainer>
              </div>
            </SortContainer>
            <SortContainer className="d-lg-none d-xl-none d-md-none d-sm-block d-xs-block">
            <div className="mobile-responsive">
                <DesktopContainer>
                  <div className="text-container">
                    {activeCount.length} {activeCount.length > 1 ? "items left" : "item left"}
                  </div>
                    <div>
                    <button className="button btn-clearcompleted" onClick={() => clearCompleted()}>Clear Completed</button>
                  </div>
                </DesktopContainer>
              </div>
            </SortContainer>
            </>)
            : ""
          }
        </UlContainer>
        
        )}
        
      </Droppable>
        <MobileContainer className="d-lg-none d-xl-none d-md-none d-sm-block d-xs-block">
          <div className="mobile-responsive">
            <button className={`custom-button button ${groupTodoList === "All" ? 'active' : ''} `} onClick={() => setTodoGroupList("All")}>All</button>
            <button className={`custom-button button ${groupTodoList === "Active" ? 'active' : ''} `} onClick={() => setTodoGroupList("Active")}>Active</button>
            <button className={`button ${groupTodoList === "Completed" ? 'active' : ''} `} onClick={() => setTodoGroupList("Completed")}>
              Complete
            </button>
          </div>
        </MobileContainer>
    </DragDropContext>
  );
}

export default TodoItem;

//contoroller의 역할
import './App.css';
import Todo from './Todo';// Todo Import
import React, { useEffect, useState } from 'react';
import { Container, List, Paper } from '@mui/material';
import AddTodo from './AddTodo';
import { call } from './service/ApiService';

function App() {
  const [items, setItems] = useState([]);
  
useEffect(() => {
  call("/todo", "GET", null)
  .then((response) => setItems(response.data));
}, []);
  
  //item을 리스트에 추가하는 함수.
  const addItem = (item) => {
   call("/todo", "POST", item)
   .then((response) => setItems(response.data));
  };

  //item을 리스트에서 제거하는 함수
  const deleteItem = (item)=>{
    call("/todo", "DELETE", item)
    .then((response) => setItems(response.data));
  };

  //item 편집 함수
  const editItem = (item) => {
    call("/todo", "PUT", item)
    .then((response) => setItems(response.data));
  };

  let todoItems = //let : 변수 중복 선언불가, 재할당 가능
    items.length > 0 && (<Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id} editItem={editItem} deleteItem={deleteItem} />
        ))}
      </List>
    </Paper>
    );

  return(
  <div className="App">
    <Container maxWidth="md">
      <AddTodo addItem={addItem} />
      <div className="TodoList">{todoItems}</div>
    </Container>
  </div>
  );
}

export default App;
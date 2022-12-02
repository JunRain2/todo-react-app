//contoroller의 역할
import './App.css';
import Todo from './Todo';// Todo Import
import React, { useState } from 'react';
import { Container, List, Paper } from '@mui/material';
import AddTodo from './AddTodo';

function App() {
  const [items, setItems] = useState([]);

  //item을 리스트에 추가하는 함수.
  const addItem = (item) => {
    item.id ="ID-" + items.length; // Key를 위한 id
    item.done = false;// done 초기화
    // 업데이트는 반드시 setItems를 하고 새 배열을 만들어야 한다.
    setItems([...items,item]);
    // ...(가변 인자 함수) : 리액트는 레퍼런스(참조) 기준으로 재 렌더링. 배열의 참조는 배열에 값을 추가하더라도 변하지 않는다
    //따라서 리액트는 이배열에 아무 변화도 없다고 판단해 다시 렌더링하지 않는다. 이를 해결하기 위해 배열에 새 items을 추가할 떄마다 새배열을 만들어줌
    console.log("items : ", items);
  };

  //item을 리스트에서 제거하는 함수
  const deleteItem = (item)=>{
    //삭제할 아이템을 찾는다.
    const newItems =items.filter(e=>e.id!=item.id);
    // 삭제할 아이템을 제외한 아이템을 다시 배열에 저장한다.
    setItems([...newItems]);
  }
  //item 편집 함수
  const editItem = () => {
    setItems([...items]);
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
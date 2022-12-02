import React, { useState } from "react";//리액트 훅(Hook) 중 하나인 useState는 함수형 컴포넌트에 상태 변수를 사용할 수 있게 해준다. useState : 리액트에게 오브젝트가 상태라고 알림.
import {
    ListItem, ListItemText, InputBase, Checkbox,
    ListItemSecondaryAction, IconButton
} from "@mui/material";// meterial-mui를 사용하기 위함.
import DeleteOutlined from "@mui/icons-material/DeleteOutlined"



const Todo = (props) => {
    const [item, setItem] = useState(props.item);//setItem 함수를 이용해 item을 업데이트

    const [readOnly, setReadOnly] = useState(true);//readOnly 상태변수 추가.

    const deleteItem = props.deleteItem;//App에 있는 dlelteItem() 연결

    const editItem = props.editItem;//App에 있는 editItem() 연결

    //키 입력에 따라 title을 변경.
    const editEventHandler = (e) => {
        item.title = e.target.value;
        editItem();
    };

    //deleteItem() 추가를 위해 deleteEventHandler 작성
    const deleteEventHandler = () => {
        deleteItem(item);
    }
    //turnOffReadOnly 함수 작성. readOnly를 false로 변경
    const turnOffReadOnly = () => {
        setReadOnly(false);
    }
    //turnOnReadOnly() 작성
    const turnOnReadOnly = (e) =>
    {
        if(e.key == "Enter"){
            setReadOnly(true);
        }
    }
    //체크 박스 핸들러를 추적해 done 초기화
    const checkboxEventHendler = (e) => {
        item.done = e.target.checked;
        editItem();
    }

    //Todo 리스트.
    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHendler} />
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label": "naked",
                        readOnly: readOnly
                    }}//readOnly연결.
                    onClick={turnOffReadOnly}//연결.
                    onKeyDown={turnOnReadOnly}//연결
                    onChange={editEventHandler}//연결
                    typed="text"
                    id={item.id}
                    name={item.name}// id와 name을 통해 같은 title을 가지고 있을경우 구분. 백엔드와 연결시 백엔드 id로 대체.
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delelte Todo"
                    onClick={deleteEventHandler}>
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Todo;
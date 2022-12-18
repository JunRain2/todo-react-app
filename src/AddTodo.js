import React,{useState} from "react";

import { Button, Grid, TextField } from "@mui/material";

const AddTodo = (props) => {
    //사용자가 입력을 저장할 임시 오브젝트를 item에 지정.
    const [item, setItem] = useState({title : ""});// 비구조화할당, 인풋필드 정보를 컴포넌트 내부에 임시로 저장하기 위해 초기화.
    const addItem = props.addItem;

    //onButtonClick 함수
    const onButtonClick = () => {
        addItem(item);//addItem 사용.
        setItem({title:""});
        console.log(item);
    }

    //enterKeyEvenHandler 함수
    const enterKeyEvenHandler = (e) => {
        if (e.key === 'Enter'){
            onButtonClick();//함수 재이용
        }
    };

    //onInputChange 자바스크립트 함수.
    const onInputChange = (e) =>{//Event e 매개 변수. 사건에 대한 정보. 이벤트 때마다 발생.
        setItem({title : e.target.value});//target.value에 인풋필드에 입력된 글자가 담겨 있다.
        console.log(item);
    };// e.target.value를 item에 타이틀로 지정후 setItem을 통해 item을 새로 업데이트.

    //AddTodo 그리드 안의 텍스트 필드와 버튼 그리드를 만듦.
    //사용자가 정보를 입력, TextField에 전달
    return(
        <Grid container style={{ marginTop:20}}>
            <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                <TextField placeholder="Add Todo here" fullWidth //onChange 추가. 입력이 들어올 때마다 함수 실행.
                onChange ={onInputChange} onKeyPress={enterKeyEvenHandler}//onKeyPress : 키보드 키를 누르면 실행되는 이벤트 핸들러.
                value={item.title}
                />
            </Grid>
            <Grid xs={1} md={1} item>
            <Button fullWidth style ={{height : '100%'}} color="secondary" //onClick 추가
            onClick={onButtonClick} variant = "outlined">
                +
                </Button>
            </Grid>
        </Grid>
    );
}

export default AddTodo;

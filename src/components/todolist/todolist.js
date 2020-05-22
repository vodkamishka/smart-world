import React from 'react';
import TodoItem from '../todo-item/todo-item';

const TodoList = (props) => {
    const {todoList, setSelectId, showedModalDelete, showedModalWindow, selList, id} = props;
    return (
        <div className = 'todo-list'>
            {todoList ? todoList.map(el => 
                <TodoItem 
                    key = {el.id} 
                    text ={el.business} 
                    setSelectId = {setSelectId} 
                    idListItem = {el.id}
                    showedModalDelete = {showedModalDelete}
                    showedModalWindow = {showedModalWindow}
                    selList = {selList}
                    el = {el}    
                    id = {id}
                    props = {props}
                />) : null}
        </div>
    )
}

export default TodoList;
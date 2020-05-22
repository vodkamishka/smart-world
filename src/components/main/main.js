import React, {Component} from 'react';
import './main.scss';
import Menu from '../menu/menu';
import CaseList from '../caselist/caselist';


const  Main = (props) => {

    let list;
    if (props.todoList) list = props.todoList.filter(el => el.id === props.id)[0]
    return (
        <div className = "main">
            <Menu {...props}/>
            <CaseList 
                list = {list}  
                {...props}
            />
        </div>      
    )
  
}

export default Main;

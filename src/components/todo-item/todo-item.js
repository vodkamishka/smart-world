import React from 'react';
import './todo-item.scss';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Clear from '@material-ui/icons/Clear';
import {theme} from '../marerial-ui/themes';
import {ThemeProvider } from '@material-ui/core/styles';

const TodoItem = ({text, setSelectId, idListItem, showedModalDelete, showedModalWindow, el, selList, id}) => {

    if (el.list !== undefined && el.list.length !== undefined) {

    let done = 0;
    el.list.forEach(element => done += element.done);

    let length = el.list.length 
    
    const style = {
        'background': length === 0 ? 'white' : 
         length > 0 && done === length ? 'lightgrey' : 'lightgreen',
        'borderTop': id === idListItem ? '1.5px solid black': 'none',
        'borderLeft': id === idListItem ? '1.5px solid black': 'none',
        'borderBottom': id === idListItem ? '1.5px solid black': '1px solid black',
        'borderRight': id === idListItem ? '1.5px solid black': '0.5px solid black'
    }
    
    const display = selList === 'all' ? 'flex' : selList === 'executed' && done === length && done > 0 ? 'flex':
    selList === 'rest' && done < length ? 'flex' : selList === 'rest' && done === length && done === 0 ? 'flex': 'none'
    
    return (
        <ThemeProvider theme={theme}>
            <div className = 'todo-item' style = {{'display': display}}>
                <div className = 'todo-item__block ' 
                    style = {style}
                    onClick = {() => setSelectId(idListItem)}
                >
                    {text}
                </div>
                <div className = 'todo-item__buttons'>
                    <div className = 'todo-item__container-button-edit'>
                        <Fab
                            className = 'todo-item__button'
                            onClick = {() => showedModalWindow({text, id: idListItem, viewModal: 'edit-list'})}
                            size="small" 
                            color="primary"
                        >
                            <EditIcon />
                        </Fab>
                    </div>
                    <div className = 'todo-item__container-button-delete'>
                        <Fab
                            className = 'todo-item__button'
                            onClick = {() => showedModalDelete({text, id: idListItem, viewModal: 'delete-list'})}
                            size="small" 
                            color="primary"
                        >
                            <Clear />
                        </Fab>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
    }
}

export default TodoItem;
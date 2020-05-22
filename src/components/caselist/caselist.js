import React from 'react';
import './caselist.scss';
import CaseItem from '../case-item/case-item';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {theme} from '../marerial-ui/themes';
import {ThemeProvider } from '@material-ui/core/styles';



const CaseList = ({list, showedModalWindow, showedModalDelete, showMessage, id,
                     addDone, todoList}) => {
    let listCases;
    if (list && list.list) {
        listCases = list.list 
    }
    return (
        <div className = 'caseList'>
            <div className = 'caseList__title'>Список дел на отпуск</div>
            <div className = 'caseList__list'>
                {list && list.list ? listCases.map(el => 
                    <CaseItem
                        key = {el.idCase} 
                        text = {el.text} 
                        importance = {el.importance} 
                        idCaseItem = {el.idCase} 
                        showedModalDelete = {showedModalDelete}
                        date = {el.date}
                        showedModalWindow = {showedModalWindow}
                        addDone = {addDone}
                        done = {el.done}
                        id = {id}
                        todoList = {todoList}
                    />) : null}
            </div>
            <div className = 'caseList__button-container'>
                <ThemeProvider theme={theme}>
                    <Fab 
                        className='caseList__button-add'
                        onClick = {() => id !== null ? showedModalWindow({viewModal: 'add-case', id}) : showMessage('Выберите список дел')}
                        size="medium" 
                        color="primary"
                    >
                        <AddIcon />
                    </Fab>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default CaseList;
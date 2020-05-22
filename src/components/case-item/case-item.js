import React, {Component} from 'react';
import './case-item.scss';
import Fab from '@material-ui/core/Fab';
import Checkbox from '@material-ui/core/Checkbox';
import Clear from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import {theme, themeCheckbox} from '../marerial-ui/themes';
import {ThemeProvider } from '@material-ui/core/styles';

class CaseItem extends Component {

    state = {
        checkbox: false
    }
    
    handleCheckbox = (event) => {
        this.setState({
            checkbox: event.target.checked
        });
    }

    render() {
        const {text, done, idCaseItem, showedModalDelete, date, showedModalWindow, todoList, 
             addDone, importance, id} = this.props;
           
        return (
            <div className = 'case-item'>

                <div className='case-item__checkbox-container'>
                    <ThemeProvider theme={themeCheckbox}>
                        <Checkbox 
                            className='case-item__checkbox'
                            checked={done} 
                            color='primary'
                            onChange = {(e) => {
                                const promise = new Promise (res => {
                                    this.handleCheckbox(e);
                                    res();
                                })
                                promise.then(() => addDone(todoList, this.state.checkbox, idCaseItem, id));
                            }}   
                        />
                    </ThemeProvider>
                </div>
                <div className='case-item__block'>
                    <div className = 'case-item__sign-importance'>
                        <div className = 'case-item__ball'
                            style = {{background: importance ? 'red' : 'white'}} 
                        ></div> 
                    </div>
                    <div className = 'case-item__text'>{text}</div>
                    <div className = 'case-item__date'>{date}</div>
                </div>
                <ThemeProvider theme={theme}>
                    <div className = 'case-item__container-buttons'>
                        <div className = 'case-item__container-buttons-edit'>
                            <Fab
                                className = 'case-item__button'
                                onClick = {() => showedModalWindow({text, id, idCase: idCaseItem, viewModal: 'edit-case'})}
                                size="small" 
                                color="primary"
                            >
                                <EditIcon />
                            </Fab>
                        </div>
                        <div >
                            <Fab 
                                className = 'case-item__button'
                                onClick = {() => showedModalDelete({text, id, idCase: idCaseItem, viewModal: 'delete-case'})}
                                size="small" 
                                color="primary"
                            >
                                <Clear />
                            </Fab> 
                        </div>
                    </div>
                </ThemeProvider>
            </div>
        )
    } 
}

export default CaseItem;



import React from 'react';
import './menu.scss';
import Select from '../select/select';
import TodoList from '../todolist/todolist';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {theme} from '../marerial-ui/themes';
import {ThemeProvider } from '@material-ui/core/styles';

const Menu = (props) => {
    
    return (
        <div className = 'menu'>
            <Select {...props}/>
            <div className = 'menu__container'>
                <div className = 'menu__main'>
                    <TodoList {...props}/>
                    <div className = 'menu__button-container'>
                        <ThemeProvider theme={theme}>
                            <Fab
                                className = 'menu__button-add'
                                onClick = { () => props.showedModalWindow({viewModal: 'add-list'})}
                                size="medium" 
                                color="primary"
                            >
                                <AddIcon />
                            </Fab>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;
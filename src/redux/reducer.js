import {getTime} from '../common/get-time';
import sort from '../common/sort';

const initialState = {
    todoList: [],
    data: {
        auth: false
    } 
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        
        case 'LOADED_DATA':
            
            return {
                ...state,
                todoList: action.amount
            }
        

        case 'DELETE_LIST_ITEM': {

            const id = state.todoList.findIndex(el => el.id === action.amount)
           
            if (state.todoList.length === 1 ) 
            return {
                ...state,
                todoList: []
            }
            return {
                ...state,
                todoList: [
                    ...state.todoList.slice(0, id),
                    ...state.todoList.slice(id + 1),
                ]
            } 
        }

        case 'ADD_NEW_CASE': {
            
            const {text, checkbox, id} = action.amount;
            const idx = state.todoList.findIndex(el => el.id === id)
            let newTodoList = [...state.todoList].filter(el => el.id === id)[0] 
            
            let idCase = newTodoList.list.length; 
           
            newTodoList.list.forEach((el) => {
                if (idCase === el.idCase) idCase++
            })
            
            const list = [
                ...newTodoList.list,
                {   
                    done: false,
                    importance: checkbox,
                    text,
                    date: getTime(),
                    idCase
                },
            ]
            newTodoList = {...newTodoList, list}
          
            return {
                ...state,
                todoList: [
                    ...state.todoList.slice(0, idx),
                    newTodoList,
                    ...state.todoList.slice(idx + 1),
                ]
            }
        }

        
        case 'DELETE_CASE_ITEM': {

            const {idCase, id} = action.amount;
            
            const idx = state.todoList.findIndex(el => el.id === id)
            let list = state.todoList.filter(el => el.id === id)[0].list;

            let newTodoList = [...state.todoList].filter(el => el.id === id)[0];
            const idxCase = newTodoList.list.findIndex(el => el.idCase === idCase)

            if (list.length === 1) {
                list = []
            } else {
                list = [
                    ...newTodoList.list.slice(0, idxCase),
                    ...newTodoList.list.slice(idxCase + 1),
                ]
            }
                
            newTodoList = {...newTodoList, list}

            return {
                ...state,
                todoList: [
                    ...state.todoList.slice(0, idx),
                    newTodoList,
                    ...state.todoList.slice(idx + 1),
                ]
            }

        }

        case 'ADD_DONE': {

            const {done, idCase, id} = action.amount;
            const idx = state.todoList.findIndex(el => el.id === id)
            let newTodoList = [...state.todoList].filter(el => el.id === id)[0];
            let newCase = [...state.todoList].filter(el => el.id === id)[0].list.filter(el => el.idCase === idCase)[0]
            const idxCase = newTodoList.list.findIndex(el => el.idCase === idCase)

            const list = [
                ...newTodoList.list.slice(0, idxCase),
                {...newCase, done},
                ...newTodoList.list.slice(idxCase + 1),
            ]
            
            newTodoList = {...newTodoList, list}
          
            return {
                ...state,
                todoList: [
                    ...state.todoList.slice(0, idx),
                    newTodoList,
                    ...state.todoList.slice(idx + 1),
                ]
            }
        }

        case 'GET_DATA_AUTHORIZATION': {
            return {
                ...state,
                data: {
                    auth: true
                }
            }
        }

        case 'LOG_OUT': {
            return {
                ...state,
                data: {
                    ...state.data,
                    auth: false
                }
            }
        }
        
        default: return state;
    }
}

export default reducer;
import {LOADED_DATA, ADD_DONE, LOG_OUT, ADD_NEW_CASE,
    DELETE_LIST_ITEM, DELETE_CASE_ITEM, GET_DATA_AUTHORIZATION} from './actions';
import {todoListApi} from '../services/api';

export const loadedData = data => ({type: LOADED_DATA, amount: data});
export const listItemDelete = id => ({type: DELETE_LIST_ITEM, amount: id});
export const addedNewCase = (text, checkbox, id) => ({type: ADD_NEW_CASE, amount: {text, checkbox, id}});
export const caseItemDelete = (id, idCase) => ({type: DELETE_CASE_ITEM, amount: {id, idCase}});
export const addedDone = (done, idCase, id) => ({type: ADD_DONE, amount: {done, idCase, id}});
export const getAuthorization = () => ({type: GET_DATA_AUTHORIZATION})
export const logOut = () => ({type: LOG_OUT})

const {getData, addList, deleteList, updateList, addCase, updateCase, deleteCase, addDoneCheckbox} = todoListApi;

export const dataApiLoaded = () => {
    
    return dispatch => {
        getData()
        .then(res => dispatch(loadedData(res)))
    }
}

export const addNewList = (todoList, text) => {
    
    return dispatch => {
        let promise = new Promise(res => {
            addList(todoList, text)
            res()
        })
        promise.then(() => {
            getData()
            .then(res => dispatch(loadedData(res)))}) 
    }
}

export const deleteListItem = id => {
    
    return dispatch => {
        deleteList(id)
        dispatch(listItemDelete(id)) 
    }
}

export const editListItem = (text, id) => {
    
    return dispatch => {
        let promise = new Promise (res => {
            updateList(text, id)
            res()
        })
        promise.then(() => {
            getData()
            .then(res => dispatch(loadedData(res))) 
        })   
}}

export const addNewCase = (todoList, text, checkbox, id) => {

    return dispatch => {
        
        addCase(todoList, text, checkbox, id)
        dispatch(addedNewCase(text, checkbox, id))   
    }
}

export const editCaseItem = (todoList, text, idCase, id) => {
    
    return dispatch => {
        let promise = new Promise (res => {
            updateCase(todoList, text, idCase, id)
            res()
        })
        promise.then(() => {
            getData()
            .then(res => dispatch(loadedData(res))) 
        })   
}}

export const deleteCaseItem = (todoList, id, idCase) => {
    
    return dispatch => {
        deleteCase(todoList, id, idCase)
        dispatch(caseItemDelete(id, idCase)) 
    }
}

export const addDone = (todoList, done, idCase, id) => {
    
    return dispatch => {
      
        addDoneCheckbox(todoList, done, idCase, id)
        dispatch(addedDone(done, idCase, id))
      
        
}}
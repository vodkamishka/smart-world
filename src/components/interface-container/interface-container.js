import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Interface from '../interface/interface';
import {loadedData, addNewList, addNewCase, editListItem, deleteListItem,
     editCaseItem, deleteCaseItem, addDone, getAuthorization, logOut, dataApiLoaded
    } from '../../redux/action-creators';
import Login from '../login/login';

const InterfaceContainer = (props) => {

    useEffect(() => {
        props.dataApiLoaded();
       
    }, [])

    return (!props.data.auth) ?  <Login {...props} /> : <Interface {...props} />
}

const mapStateToProps = (state) => {
   
    return {
        todoList: state.todoList,
        data: state.data
    }
}
 
const mapDispatchToProps = {
    loadedData, addDone, addNewList, addNewCase, editListItem,
    deleteListItem, editCaseItem, deleteCaseItem, addDone,
    getAuthorization, logOut, dataApiLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(InterfaceContainer)
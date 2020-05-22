import React, {Component} from 'react';
import './interface.scss';
import Header from '../header/header';
import Main from '../main/main';
import ModalDelete from '../modal-delete/modal-delete';
import Warning from '../warning/warning';
import Message from '../message/message';
import ModalWindow from '../modal-window/modal-window';
import sortArray from '../../common/sort';

class Interface extends Component {
    state = {
        text: '', 
        id: null,
        selList: 'all',
        warn: false,
        warnText: '',
        mes: false,
        mesText: '',
        timer: null, 
        modal: false,
        id: null, 
        viewModal: '', 
        del: false,
        idCase: null
    }
    setSelectId = id => {this.setState({id})}
    
    selectedList = selList => {this.setState({selList})}
    setWarningText = text => {
        this.setState({
            warnText: text,
            warn: true
        })
    }
    closeWarning = () => this.setState({warn: false})
    showMessage = text => {
        this.setState({mes: true, mesText: text})
        this.timer = setTimeout(() => this.setState({mes: false}), 3000)
    }
    componentWillUnmount = () => {clearInterval(this.timer)}
    showedModalWindow = ({text= '', id, idCase, viewModal}) => {
        this.setState({
            text, 
            idCase,
            viewModal,
            modal: true,
            del: false,
            id
        })
    }
    closedModalWindow = () => this.setState({modal: false})
    showedModalDelete = ({text='', id, idCase, viewModal}) => {
        this.setState({
            del: true,
            text, 
            id,
            idCase,
            viewModal,
            modal: false
        })
    }
    closedModalDelete = () => this.setState({del: false})

    render () {
        const {del, warn, warnText, mes, mesText, modal} = this.state;
        let todoList = this.props.todoList;
        sortArray(todoList)
    
        return (
            <div className = "interface">
                <Header {...this.props}/>
                <Main 
                    {...this.props}
                    {...this.state}
                    setSelectId = {this.setSelectId} 
                    showedModalDelete = {this.showedModalDelete}
                    selectedList = {this.selectedList}
                    showedModalWindow = {this.showedModalWindow}
                    showMessage = {this.showMessage}
                    setSelectId = {this.setSelectId}
                    todoList = {todoList}
                />

                {modal ? <ModalWindow 
                    closedModalWindow = {this.closedModalWindow} closeWarning = {this.closeWarning} 
                    showMessage = {this.showMessage} setWarningText = {this.setWarningText} 
                    {...this.props} {...this.state}/> : null
                }

                {del ? <ModalDelete closedModalDelete = {this.closedModalDelete} showMessage = {this.showMessage}
                    closedModalDelete = {this.closedModalDelete} {...this.props} {...this.state} /> : null}

                {warn ? <Warning text = {warnText} /> : null}

                {mes ? <Message text = {mesText} /> : null}

            </div>
        )
    }
}

export default Interface;
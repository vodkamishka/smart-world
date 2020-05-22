import React from 'react';
import './modal-delete.scss';

const ModalDelete = (props) => {

    const {text, id, showMessage, deleteListItem, viewModal, deleteCaseItem, todoList, closedModalDelete, idCase} = props;
    
    return (
        <div className = 'modal-delete'>
            <div className = 'modal-delete__cross'>
                    <button 
                        className = 'modal-delete__cross-button'
                        onClick = {closedModalDelete}
                    >x</button>
            </div> 
           <div className = 'modal-delete__title'>
                <div className = 'modal-delete__text'>
                    {viewModal === 'delete-list' ? `Удалить Список дел ${text}?` : `Удалить Дело ${text}`}
                </div>
                   
           </div>
           
            <div className = 'modal-delete__container-buttons'>
                <button 
                    className = 'modal-delete__button-no'
                    onClick = {closedModalDelete}
                >нет
                </button>
                <button 
                    className = 'modal-delete__button-yes'
                    onClick = {() => {
                      
                        const business = todoList.filter(el => el.id === id)[0].business;
                        
                        viewModal === 'delete-list' ? deleteListItem(id) : deleteCaseItem(todoList, id, idCase);
                        closedModalDelete();
                        showMessage(viewModal === 'delete-list' ? `Список дел ${text} удален`: `Дело ${text} удалено из списка дел ${business}`);
                    }}
                >да
                </button>
            </div>    
        </div>
    )
}

export default ModalDelete;
import React, {useState} from 'react';
import './modal-window.scss';

const ModalWindow = (props) => {
    
    const [value, handleChange] = useState('')
    const [checkbox, handleCheckboxChange] = useState(false)
    
    const {text, editListItem, id, setWarningText, closeWarning, todoList, closedModalWindow,
        showMessage, viewModal, addNewList, editCaseItem, addNewCase, idCase} = props;
  
    return (
        <div className = 'modal-window'>
            <div className = 'modal-window__cross'>
                    <button 
                        className = 'modal-window__cross-button'
                        onClick = {() => {
                            closedModalWindow();
                            closeWarning();
                        }}
                    >x</button>
            </div>    
            <div className = 'modal-window__title'>
                {viewModal === 'edit-list' ? `Редактировать список дел ${text}` : 
                viewModal === 'add-list' ? 'Добавить список дел' :
                viewModal === 'add-case' ? 'Добавить дело' : 
                `Редактировать дело ${text}`}
            </div>
            <div className = 'modal-window__main'>
                <div className = 'modal-window__name'>Название</div>  
                <div className = 'modal-window__container-input'>
                    <input 
                        className = 'modal-window__input' 
                        type='text' 
                        value={value} 
                        onChange={(e) => handleChange(e.target.value)}
                        maxLength ='31'
                    />
                </div>
            </div>
            {viewModal === 'add-case' ?
                <div className = 'modal-window__checkbox-container'>
                    <div className = 'modal-window__checkbox-name'>Срочно</div>  
                    <div className = 'modal-window__container-checkbox'>
                        <input 
                            className = 'modal-window__checkbox' 
                            type='checkbox'
                            checked={checkbox} 
                            onChange={(e) => handleCheckboxChange(e.target.checked)}
                        
                        />
                    </div>
                </div> : null}
            <div className = 'modal-window__container-button'>
                    <button 
                        className = 'modal-window__button'
                        onClick = { () => {
                           
                            if (value.length < 1) {
                                setWarningText('Поле Название должно быть заполнено')
                            } 
                            else if (value.length > 30) {
                                setWarningText('В поле Название должно быть не более 30 знаков')
                            }
                            else if (todoList.some(el => el.business === value)) {
                                setWarningText(`Такой список дел уже существует`)
                            }
                            else if (todoList.filter(el => el.id === id).list !== undefined && 
                            todoList.filter(el => el.id === id).list.some(element => element.text === value)) {
                                setWarningText(`Такой дело уже существует`)
                            }
                            else {
                                
                                viewModal === 'edit-list' ? editListItem(value, id) : viewModal === 'add-list' ?
                                addNewList(todoList, value) : viewModal === 'add-case' ? addNewCase(todoList, value,  checkbox, id) :
                                editCaseItem(todoList, value, idCase, id);
                                closedModalWindow();
                                closeWarning()

                                const message = viewModal === 'edit-list' ? `Список дел ${value} изменен`: 
                                viewModal === 'add-list' ? `Список дел ${value} добавлен` : 
                                viewModal === 'add-case' ? `Дело ${value} добавлено` : `Дело ${text} изменено`

                                showMessage(message)
                            }
                            
                        }}
                    >
                        {viewModal === 'edit-list' || 'edit-case' ? 'сохранить' : 'добавить'}
                    </button>
            </div>    
        </div>
    )
}

export default ModalWindow;
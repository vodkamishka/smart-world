import React, {Component} from 'react';
import './select.scss';
import NativeSelect from '@material-ui/core/NativeSelect';

class Select extends Component {

    state = {
        value: ''
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    }
    
    render () {
        
        return (
            <div className = 'select'>
                <NativeSelect 
                    value={this.state.value} 
                    onChange= {(e) => {
                        let promise  = new Promise(res => {
                            this.handleChange(e);
                            res();
                        })
                        promise.then(() => {
                            this.props.selectedList(this.state.value)
                            this.props.setSelectId('')
                        })
                    }}
                >
                    <option defaultValue value = 'all'>Все</option>
                    <option value = 'executed'>Дела исполнены</option>
                    <option value = 'rest'>Все остальные</option>
                </NativeSelect>
            </div>
        )
    }
    
}

export default Select;
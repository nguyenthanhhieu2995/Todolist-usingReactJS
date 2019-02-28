import React, { Component } from 'react';
import classNames from 'classnames';

import './TodoItem.css';
import success from '../img/success.svg';
import unSuccess from '../img/unsuccess.svg';

class TodoItem extends Component {
    render() {
        const {item,itemOnclick} = this.props;
        let url = unSuccess;
        if (item.isComplete) {
            url = success;
        }
        return (
            <div className={classNames('TodoItem',{'TodoItem-checked': item.isComplete} )}>
                <img onClick={itemOnclick} alt='checkList' src={url} width={32} height={32}/>
                <p>{item.title}</p>
            </div>
        )
    }
}
export default TodoItem;
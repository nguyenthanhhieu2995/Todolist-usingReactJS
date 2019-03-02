import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TodoItem.css';
import success from '../img/success.svg';
import unSuccess from '../img/unsuccess.svg';

import { Button } from "reactstrap";

class TodoItem extends Component {
    shouldComponentUpdate(nextProps) {
        if ( this.props === nextProps) {
            return false
        } else return true
    }
    render() {
        const {item,itemOnclick,deleteItem} = this.props;
        let url = unSuccess;
        if (item.isComplete) {
            url = success;
        }
        return (
            <div className={classNames('TodoItem',{'TodoItem-checked': item.isComplete} )}>
                <img onClick={itemOnclick} alt='checkList' src={url} width={32} height={32}/>
                <p>{item.title}</p>
                <Button close onClick={deleteItem}></Button>
            </div>
        )
    }
}
TodoItem.propTypes = {
    item : PropTypes.shape({
        title : PropTypes.string,
        isComplete : PropTypes.bool
    }),
    itemOnclick: PropTypes.func,
    deleteItem : PropTypes.func
}
export default TodoItem;
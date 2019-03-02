import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';
import checkAll from '../img/check-all.svg';

import { Button } from "reactstrap";

class InputItem extends Component {
    constructor(props) {
        super(props);
        this.inputElement=React.createRef();
    }
    componentWillMount() {
        console.log('--->componentWillMount()--->render()');
    }
    componentDidMount() {
        console.log('--->componentDidMount()');
        this.inputElement.current.focus();
    }
    componentWillReceiveProps(nextProps) {
        console.log('--->componentWillReceiveProps()');
    }
    shouldComponentUpdate(nextProps) {
        if ( this.props === nextProps) {
            return false
        } else return true
    }
    componentWillUpdate() {
        console.log('--->componentWillUpdate()--->render()');
      }
    componentDidUpdate() {
        console.log('-->componentDidUpdate()')
    }
    render() {
        let { value , onChange , onKeyUp , itemOnclickAll, deleteInput } = this.props;
        return(
            <div className="Header">
                <img onClick={itemOnclickAll} 
                    alt='check-all' 
                    src={checkAll} 
                    width={32} 
                    height={32}/>
                <input 
                    type="text" 
                    placeholder="What need to be done ?" 
                    value={value}
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                    ref={this.inputElement}
                    />
                <Button close onClick={deleteInput}></Button>
            </div>
        )
    }
}
InputItem.propTypes = {
    value : PropTypes.string,
    onChange : PropTypes.func,
    onKeyUp : PropTypes.func,
    itemOnclickAll : PropTypes.func,
    deleteInput : PropTypes.func
}
export default InputItem;
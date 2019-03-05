import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Input} from 'reactstrap';

import './InputItem.css';
import checkAll from '../img/check-all.svg';

class InputItem extends Component {
    constructor(props) {
        super(props);
        this.inputElement=React.createRef();
    }  
    render() {
        let { value , onChange , onKeyUp , itemOnclickAll, deleteInput } = this.props;
        
        return(
            <InputGroup>
                <span>
                    <img 
                        src={checkAll}
                        width={32} 
                        height={32} 
                        alt="check-all"
                        onClick={itemOnclickAll}/>
                </span>
                <Input 
                    placeholder="What need to be done ?" 
                    type="text"
                    value={value}
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                    ref={this.inputElement}/>
                <InputGroupAddon addonType="append">
                    <Button close onClick={deleteInput}></Button>
                </InputGroupAddon> 
            </InputGroup>
        )
    }
};

InputItem.propTypes = {
    value : PropTypes.string.isRequired,
    /** onClick handler */
    onChange : PropTypes.func,
    /** onClick handler */
    onKeyUp : PropTypes.func,
    /** onClick handler */
    itemOnclickAll : PropTypes.func,
    /** onClick handler */
    deleteInput : PropTypes.func,
    name :PropTypes.string
};
export default InputItem;
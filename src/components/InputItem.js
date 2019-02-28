import React, { Component } from 'react';
import '../App.css';
import checkAll from '../img/check-all.svg';

class InputItem extends Component {
    render() {
        let { value , onChange , onKeyUp , itemOnclickAll } = this.props;
        return(
            <div className="Header">
                <img onClick={itemOnclickAll} alt='check-all' src={checkAll} width={32} height={32}/>
                <input 
                    type="text" 
                    placeholder="What need to be done ?" 
                    value={value}
                    onChange={onChange}
                    onKeyUp={onKeyUp}/>
            </div>
        )
    }
}
export default InputItem;
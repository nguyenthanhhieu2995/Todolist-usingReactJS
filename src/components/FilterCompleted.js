import React, { Component } from 'react';
import '../App.css';

class FilterCompleted extends Component {
    render() {
        const { selectFilter } = this.props;
        return(
            <span><a href="#" onClick={selectFilter}>Completed</a></span>
        )
    }
}
export default FilterCompleted;
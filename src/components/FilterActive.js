import React, { Component } from 'react';
import '../App.css';

class FilterActive extends Component {
    render() {
        const { selectFilter } = this.props;
        return(
            <span><a href="#" onClick={selectFilter}>Active</a></span>
        )
    }
}
export default FilterActive;
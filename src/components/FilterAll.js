import React, { Component } from 'react';
import '../App.css';

class FilterAll extends Component {
    render() {
        const { selectFilter } = this.props;
        return(
            <span><a href="#" onClick={selectFilter}>All</a></span>
        )
    }
}
export default FilterAll;
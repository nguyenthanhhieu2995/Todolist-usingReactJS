import React, { Component } from 'react';
import '../App.css';

import { Button } from "reactstrap";

class FilterCompleted extends Component {
    render() {
        const { selectFilter } = this.props;
        return(
            <span><Button color="success" onClick={selectFilter}>Completed</Button></span>
        )
    }
}
export default FilterCompleted;
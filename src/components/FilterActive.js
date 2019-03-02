import React, { Component } from 'react';
import '../App.css';

import { Button } from "reactstrap";

class FilterActive extends Component {
    render() {
        const { selectFilter } = this.props;
        return(
            <span><Button color="warning" onClick={selectFilter}>Active</Button></span>
        )
    }
}
export default FilterActive;
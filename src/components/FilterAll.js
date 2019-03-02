import React, { Component } from 'react';
import '../App.css';

import { Button } from "reactstrap";

class FilterAll extends Component {
    render() {
        const { selectFilter } = this.props;
        return(
            <span><Button color="primary" onClick={selectFilter}>All</Button></span>
        )
    }
}
export default FilterAll;
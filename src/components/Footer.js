import React, { Component } from 'react';
import classNames from 'classnames';
import '../App.css';

class Footer extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            isActive : true,
            todoItems : this.props.todoItems
        };
        this.click = this.click.bind(this);
    }
    click(filter) {
        let { todoItems } = this.props;
        return (event) => {
            console.log(filter);
            console.log(todoItems);
            if ( filter === 'completed') {
                let filterList = todoItems.filter(item => item.isComplete === true);
                console.log(filterList);
                this.setState({
                    todoItems : filterList
                })
            } else if (filter === 'active') {
                let filterList = todoItems.filter(item => item.isComplete === false);
                console.log(filterList);
                this.setState({
                    todoItems : filterList
                })
            } else {
                this.setState({
                    todoItems : todoItems
                })
            }
        }
    }
    render() {
        let { todoItems } = this.props;
        const { isActive } = this.state;

        return(
            <div className="Footer">
                <span>
                    {isActive && <a  href="#" onClick={this.click('all')}>All</a>}
                </span>
                <span>
                    {isActive && <a  href="#" onClick={this.click('active')}>Active</a>}
                </span>
                <span>
                    {isActive &&<a  href="#" onClick={this.click('completed')}>Completed</a>}
                </span>
            </div>
        )
    }
}
export default Footer;
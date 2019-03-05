import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';

import TodoItem from './components/TodoItem';
import InputItem from './components/InputItem';
import FilterAll from './components/FilterAll';
import FilterActive from './components/FilterActive';
import FilterCompleted from './components/FilterCompleted';


class App extends Component {
  constructor() {
    super();
    this.mData = {
      newItem : '',
      currentFilter : 'all',  //'all','active','completed'
      todoItems : JSON.parse(localStorage.getItem('todoList'))
    };
    this.state = this.mData;

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.itemOnclickAll = this.itemOnclickAll.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
  }
  itemOnclickAll (event) {
    const { todoItems } = this.mData;
    let AllItem = [];
    let IsAllChecked = true;
    for (let item of todoItems) {
      if (item.isComplete === false ) {
        IsAllChecked = false 
      }
    } 

    if (IsAllChecked === false) {
      for (let item of todoItems) {
        AllItem = AllItem.concat([{
          ...item , isComplete : true 
        }]) 
      }
    } else {
      for (let item of todoItems) {
        AllItem = AllItem.concat([{
          ...item , isComplete : false 
        }]) 
      }
    }

    this.mData.todoItems = AllItem;
    this.setState(this.mData);
  }
  itemOnclicked(item) {
    return (event) => {
      const { todoItems } = this.mData;
      const isComplete = item.isComplete;
      const index = todoItems.indexOf(item);
      this.mData.newItem = this.state.newItem;
      this.mData.todoItems[index].isComplete = !isComplete;
      this.setState(this.mData);
    }
  }
  deleteItem(item) {
    return () => {
      const { todoItems } = this.mData;
      const index = todoItems.indexOf(item);
      
      this.mData.todoItems.splice(index,1);
      this.setState(this.mData);
    }
  }
  onKeyUp (event) {
    if (event.keyCode === 13) { // enter key
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      this.mData.todoItems.push({
        title : text, isComplete : false
      });
      this.setState(this.mData);
    } 
  }
  onChange (event) {
    this.setState({
      newItem: event.target.value
    })
  }
  deleteInput () {
    this.setState({
      newItem : ''
    })
  }

  selectFilter(currentFilter) {
    const { todoItems } = this.mData;

    return () => {   
  
      if ( currentFilter === 'completed') {
      let filterList = todoItems.filter(item => item.isComplete === true);
        console.log(filterList);
        this.setState({
          currentFilter : 'completed',
          todoItems : filterList
        })
      } else if (currentFilter === 'active') {
        let filterList = todoItems.filter(item => item.isComplete === false);
        console.log(filterList);
        this.setState({
          currentFilter : 'active',
          todoItems : filterList
        })
      } else {   
        let filterList = todoItems; 
        this.setState({
          currentFilter : 'all',
          todoItems : filterList
        })
      }
    }
  }
  
  render() {
    const { todoItems,newItem} = this.state;

    if (!localStorage.getItem('todoList')) {
      localStorage.setItem('todoList','[]')
    } else {
      localStorage.setItem('todoList',JSON.stringify(todoItems));
    }

    return (
      <div className="App">
        <InputItem
          itemOnclickAll={this.itemOnclickAll} 
          value={newItem}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          deleteInput={this.deleteInput}/>
        {
          todoItems.map((item,index) =>
            <TodoItem 
              key={index} 
              item={item} 
              itemOnclick={this.itemOnclicked(item)}
              deleteItem={this.deleteItem(item)}/>
          )
        }
        <div className='Footer'>
          <FilterAll selectFilter={this.selectFilter('all')}/>
          <FilterActive selectFilter={this.selectFilter('active')}/>
          <FilterCompleted selectFilter={this.selectFilter('completed')}/>
        </div>
      </div>
    );
  }
}

export default App;

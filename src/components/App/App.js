import React, {Component} from 'react';
import styles from './App.module.scss';
import ResultList from '../ResultList/ResultList';
import data from '../../assets/data/states.json'
import Search from '../Search/Search'
import DisplayWarning from '../DisplayWarning/DisplayWarning';
import {Header} from '../Header/Header';
class App extends Component {

  state = {
    cities:[],
    value: '',
  }

  // filter users quals input value,and change in state
  filterUsers(e){
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text);
    
    this.setState({
      cities:filteredUsers,
      value:text
    })
  }

 

  //return new array for filter() and equals with name of city {user.name}
  getFilteredUsersForText(text) {
    return data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
  }

  
 
  render(){

    const {cities,value} = this.state;

    return (
      <div className={styles.app}>
        <Header/>
        <Search 
          filter={this.filterUsers.bind(this)}
          value={value}
          />
         <br />
         {cities.length < 1 && value !== '' ? <DisplayWarning/> : null}
         {value !== '' ? <ResultList cities={cities}/> : null}
        
      </div>
    );
  }
  
}

export default App;

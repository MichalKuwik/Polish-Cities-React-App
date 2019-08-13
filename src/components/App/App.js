import React, {Component} from 'react';
import styles from './App.module.scss';
import ResultList from '../ResultList/ResultList';
import data from '../../assets/data/states.json'
class App extends Component {

  state = {
    cities:[],
  }

  // filter users quals input value,and change in state
  filterUsers(e){
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text);
    this.setState({
      cities:filteredUsers
    })
  }

 

  //return new array for filter() and equals with name of city {user.name}
  getFilteredUsersForText(text) {
    return data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
  }

  
 
  render(){

    const {cities} = this.state;

    return (
      <div className={styles.app}>
        <h1>App</h1>
        <input 
          type="text"
          onInput={this.filterUsers.bind(this)}
         />
         <br />
         {/* {cities < 1 ? 'Brak rekordów': null} */}
        <ResultList cities={cities}/>
      </div>
    );
  }
  
}

export default App;

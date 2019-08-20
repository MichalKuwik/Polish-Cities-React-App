import React, {Component} from 'react';
import styles from './Root.module.scss';
import ResultList from '../../components/ResultList/ResultList';
import data from '../../assets/data/states.json'
import Search from '../../components/Search/Search'
import DisplayWarning from '../../components/DisplayWarning/DisplayWarning';
import {Header} from '../../components/Header/Header';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import About from '../About/About';

class Root extends Component {

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

  //reset button
  handleResetContent = () => {
    this.setState({
      value:''
    })
  }
  
    render(){

    const {cities,value} = this.state;

    return (
      <BrowserRouter>
        <div className={styles.app}>
          <Header />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" render= {props => (
              <>
                <Search 
                  filter={this.filterUsers.bind(this)}
                  value={value}
                  resetFn={this.handleResetContent}
                  />
                <br />
                {cities.length < 1 && value !== '' ? <DisplayWarning/> : null}
                {value !== '' ? <ResultList cities={cities}/> : null}
              </>

            )} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default Root;

import React, {Component} from 'react';
import styles from './App.module.scss';
import Input from '../Input/Input';
import ResultList from '../ResultList/ResultList';

class App extends Component {

  state = {
    cities: [],
  }

  componentDidMount(){
    console.log('component is mounting')
  }

  render(){
    return (
      <div className={styles.app}>
        <h1>App</h1>
        <Input />
        <ResultList />
      </div>
    );
  }
  
}

export default App;

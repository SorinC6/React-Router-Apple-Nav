import React, { Component } from 'react';
import DummyData from './data';
import './App.css';
import { Route } from 'react-router-dom';
import MainNav from './Components/MainNav'

class App extends Component {
	state = {
		data: DummyData
	};

	render() {
		//console.log(this.state.data);
		return (
         <div>
            <Route path='/' render={
               props => <MainNav {...props} data={this.state.data}/>
            }/>
         </div>
      );
	}
}

export default App;

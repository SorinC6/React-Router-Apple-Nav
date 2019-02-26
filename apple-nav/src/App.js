import React, { Component } from 'react';
import DummyData from './data';
import './App.css';
import { Route } from 'react-router-dom';
import NavWrapper from './Components/NavWrapper';

class App extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		this.setState({ data: DummyData });
	}

	render() {
		//console.log(this.state.data);
		return (
			<div>
				<Route path="/" render={(props) => <NavWrapper {...props} data={this.state.data} />} />
			</div>
		);
	}
}

export default App;

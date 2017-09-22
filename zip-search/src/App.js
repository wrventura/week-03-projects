import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function City(props) {
  return (
	<div className="panel panel-default">
		<div className="panel-heading">City Name</div>	
	    <div className="panel-body"></div>
	</div>
);
}

function ZipSearchField(props) {
  return (
	<form onSubmit={props.onSubmit}>
		<div className="form-group row">
			<label >Zip Code:</label>
			<input type="text" class="form-control" id="usr"
				onChange={props.onChange}/>
			<input type="submit" value="Submit" />
		</div>	
	</form>
  );
}

function Extract(props) {
	return (
		<div>
		{props.map(function (i) {
			return <City />;
		})}
		</div>
	);
}
	
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {value: 'init'};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		var url = 'http://ctp-zip-api.herokuapp.com/zip/';
		url += this.state.value;
		var ob = fetch(url);
	}
	
	handleChange(event) {
		this.setState({value: event.target.value.toLowerCase()});
	}

	render() {
	return (
	  <div className="App">
		<div className="App-header">
		  <h2>Zip Code Search</h2>
		</div>
		<ZipSearchField 
			onChange={this.handleChange}
			onSubmit={this.handleSubmit}/>
		<div>
			<City />
		</div>
	  </div>
	);
	}
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import Map from './pages/Map'
import About from './pages/About'

export default class Page extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		switch(this.props.name){
			case "Home":
				return <Home />;
			case "About":
				return <About />;
			case "Map":
				return <Map />;
			default:
				return <Home />;
		}
	}
}
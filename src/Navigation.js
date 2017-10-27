import React from 'react'
import ReactDOM from 'react-dom'
import NavigationList from './NavigationList'

export default class Navigation extends React.Component {
	constructor(props){
		super(props);
		this.state = {name: 'Home', style: 'bg-home'};
		this.changeName = this.changeName.bind(this);
	}

	changeName(newName) {
		const bg = "bg-"+newName.toLowerCase();
		this.setState({name: newName, style: bg});
	}

	render() {
		return <NavigationList onClick={this.changeName} name ={this.state.name} style={this.state.style} />
	}
}
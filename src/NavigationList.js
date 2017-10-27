import React from 'react'
import ReactDOM from 'react-dom'
import Page from './Page'

export default class NavigationList extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		const name = e.target.textContent;
		this.props.onClick(name);
	}

	render(){
		return(
			<div id="main-container" class={this.props.style}>
				<div id="navbar">
					<ul>
						<li value="Home" onClick={this.handleClick}>Home</li>
						<li value="About" onClick={this.handleClick}>About</li>
						<li value="Map" onClick={this.handleClick}>Map</li>
					</ul>
				</div>

				<Page name={this.props.name} />
			</div>
		);
	}
}
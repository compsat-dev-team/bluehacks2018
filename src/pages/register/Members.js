import React from 'react'

export default class Members extends React.Component {
	constructor(props){
		super(props);
		this.handleContinue = this.handleContinue.bind(this);
	}

	handleContinue(e) {
		e.preventDefault();

		var data = {
			group_name: this.refs.group_name.value
		}

		this.props.saveValues(data);
		this.props.nextStep();
	}

	render(){
		return(
			<div class='main-container'>
				<div id='register-container'>
					<label>Members</label>
					<button onClick={ this.props.prevStep }>Previous</button>
					<button onClick={ this.props.nextStep }>Next</button>
				</div>
			</div>
		);
	}
}
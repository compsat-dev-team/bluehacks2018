import React from 'react'

export default class GroupName extends React.Component {
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
					<label>Group Name</label>
					<input type="text"
						ref="group_name"
						defaultValue={ this.props.state.group_name } />
					<button onClick={ this.handleContinue }>Next</button>
				</div>
			</div>
		);
	}
}
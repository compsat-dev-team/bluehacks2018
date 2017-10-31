import React from 'react'

export default class OtherQuestions extends React.Component {
	constructor(props){
		super(props);
		this.handleContinue = this.handleContinue.bind(this);
	}

	handleContinue(e) {
		e.preventDefault();

		var data = {
			other_where: this.refs.other_where.value,
			other_what: this.refs.other_what.value
		}

		this.props.saveValues(data);
		this.props.nextStep();
	}

	render(){
		return(
			<div class='main-container'>
				<h1>Other Questionss</h1>
				<div id='register-container'>
					<div class="field">
						<label>Where did you hear about BlueHacks?</label>
						<input type="textarea"
							ref="group_name"
							defaultValue={ this.props.state.other_where } />
					</div>
					<div class="field">
						<label>Why they want to join BlueHacks?</label>
						<input type="textarea"
							ref="group_name"
							defaultValue={ this.props.state.other_what } />
					</div>
					<button onClick={ this.handleContinue }>Next</button>
					<button onClick={ this.props.prevStep }>Prev</button>
				</div>
			</div>
		);
	}
}
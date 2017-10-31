import React from 'react'

import GroupName from './register/GroupName'
import MemberDetails from './register/Members'
import OtherQuestions from './register/OtherQuestions'

export default class Register extends React.Component {
	constructor(props){
		super(props);
		this.handleNext = this.handleNext.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.state = { 
			step : 0,
			group_name: '',
			other_where: '',
			other_what: ''
		}
	}

	handleNext() {
		this.setState({step: this.state.step + 1});
	}

	handlePrev(){
		this.setState({step: this.state.step - 1});
	}

	handleSave(data){
		this.setState(
			Object.assign({}, this.state, data)
		);

		console.log(this.state);
	}

	render(){
		switch(this.state.step){
			case 0:
				return(
					<div class="main-container">
						<div id="register-container">
							<h1>Register for BlueHacks 2018</h1>
							<button onClick={this.handleNext}> Start </button>
						</div>
					</div>
				)
			case 1:
				return <GroupName state={this.state}
								  nextStep={this.handleNext} 
								  prevStep={this.handlePrev}
								  saveValues={this.handleSave} />
			case 2:
				return <MemberDetails state={this.state}
									  nextStep={this.handleNext} 
									  prevStep={this.handlePrev}
									  saveValues={this.handleSave} />
			case 3:
				return <OtherQuestions state={this.state}
									   nextStep={this.handleNext} 
									   prevStep={this.handlePrev}
									   saveValues={this.handleSave} />
		}
	}
}

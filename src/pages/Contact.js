import React from 'react';
import {getToken, postContactForm} from '../utils/contact-api';
import forge from 'node-forge';
import ReCAPTCHA from 'react-google-recaptcha';


export default class Contact extends React.Component {

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleRecaptcha = this.handleRecaptcha.bind(this);
		this.state = { 
			token: null,
			name: null,
			email: null,
			message: null,
		}
	}

	componentDidMount() {
		getToken().then((response) => {
			var token = response.token_key;
			var hmac = forge.hmac.create();
			hmac.start('sha256', token);
			hmac.update('/bh_form_handler.php');

			var hashed_token = hmac.digest().toHex()
			this.setState({token: hashed_token});
		});
	}

	handleInput(e){
		const state_name = e.target.name;
		const state_value = e.target.value;
		this.setState({ [state_name] : state_value });
	}

	handleSubmit(e){
		e.preventDefault();
		console.log(JSON.stringify(this.state));
		postContactForm(JSON.stringify(this.state)).then((response) => {
			alert(response.message);
		});
	}

	handleRecaptcha(e){
		this.setState({
			'g-recaptcha-response': e
		});

		console.log(this.state);
	}

	render(){
		return(
			<form>
				<div id="contact-container">
					<div class="contact-form-container">
						<h1>Contact us</h1>
						<p>Have any questions? Leave us a message.</p>
						<div class="field">
							<label>Name:</label>
							<input name="name" type="text" onChange={this.handleInput} required />
						</div>
						<div class="field">
							<label>E-mail Address:</label>
							<input name="email" type="text" onChange={this.handleInput} required />
						</div>
						<div class="field">
							<label>Message:</label>
							<textarea name="message"
									rows="7" 
									ref="member2_diet" onChange={this.handleInput} required />
						</div>
						<ReCAPTCHA
							ref="recaptcha"
							sitekey="6LdpbjoUAAAAAAoDKA0CZcUpXNABV4h8VDmwPa1G"
							onChange={this.handleRecaptcha}
						/>
						<button 
							id="btn-send"
							onClick={this.handleSubmit}>
							Send
						</button>
					</div>
				</div>
			</form>
		);
	}
}
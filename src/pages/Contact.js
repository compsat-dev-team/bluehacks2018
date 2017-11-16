import React from 'react'

export default class Contact extends React.Component {
	render(){
		return(
			<div id="contact-container">
				<div class="contact-desc-container">
					<h1>Contact us</h1>
					<p>Hello</p>
				</div>
				<div class="contact-form-container">
					<div class="field">
						<label>Name:</label>
						<input type="text" />
					</div>
					<div class="field">
						<label>E-mail Address:</label>
						<input type="text" />
					</div>
					<div class="field">
						<label>Message:</label>
						<textarea rows="4" 
								ref="member2_diet" />
					</div>
					<button id="btn-send">Send</button>
				</div>
			</div>
		);
	}
}
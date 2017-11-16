import React from 'react'

export default class Register extends React.Component {
	constructor(props){
		super(props);
		this.handleSave = this.handleSave.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = { 
			group_name: '',
			member1_name: '',
			member1_school: '',
			member1_contact: '',
			member1_email: '',
			member1_diet: '',
			member1_size: '',
			member2_name: '',
			member2_school: '',
			member2_contact: '',
			member2_email: '',
			member2_diet: '',
			member2_size: '',
			member3_name: '',
			member3_school: '',
			member3_contact: '',
			member3_email: '',
			member3_diet: '',
			member3_size: '',
			member4_name: '',
			member4_school: '',
			member4_contact: '',
			member4_email: '',
			member4_diet: '',
			member4_size: '',
			other_where: '',
			other_why: '',
			other_what: '',
			other_concerns:''
		}
	}

	handleSave(data){
		// should save to database!
		// redirect somewhere
	}

	handleChange(){
		// updates state whenever a change happen
	}

	render(){
		return(
			<div id="register-container">

				<h1>Register for Blue Hacks 2018</h1>

				<div class="group-name-container">
					<h2>Group name: </h2>
					<input type="text" 
							ref="group_name" />
				</div>

				<div class="members-container">
					<h2>Members</h2>
					<div class="member">
						<div class="member-title">
							<h3>Member 1</h3>
							<h4>(Group leader)</h4>
						</div>

						<div class="field">
							<label>Name: </label>
							<input type="text" 
								ref="member1_name" />
						</div>
						<div class="field">
							<label>School: </label>
							<input type="text" 
								ref="member1_school"/>
						</div>
						<div class="field">
							<label>Contact no.: </label>
							<input type="text" 
								ref="member1_contact"/>
						</div>
						<div class="field">
							<label>E-mail: </label>
							<input type="text" 
								ref="member1_email"/>
						</div>
						<div class="field">
							<label>Dietary Restrictions: </label>
							<textarea rows="4"
								ref="member1_diet" />
						</div>
						<div class="field">
							<label>Shirt Size: </label>
							<input type="radio"
								id="member1_size_xs"
								name="member1_size"
								value="XS"/> XS
							<input type="radio"
								id="member1_size_s"
								name="member1_size"
								value="S"/> S
							<input type="radio"
								id="member1_size_m"
								name="member1_size"
								value="M"/> M
							<input type="radio"
								id="member1_size_l"
								name="member1_size"
								value="L"/> L
							<input type="radio"
								id="member1_size_xl"
								name="member1_size"
								value="XL"/> XL
						</div>
					</div>
					<div class="member">
						<div class="member-title">
							<h3>Member 2</h3>
						</div>

						<div class="field">
							<label>Name: </label>
							<input type="text" 
								ref="member2_name" />
						</div>
						<div class="field">
							<label>School: </label>
							<input type="text" 
								ref="member2_school"/>
						</div>
						<div class="field">
							<label>Contact no.: </label>
							<input type="text" 
								ref="member2_contact"/>
						</div>
						<div class="field">
							<label>E-mail: </label>
							<input type="text" 
								ref="member2_email"/>
						</div>
						<div class="field">
							<label>Dietary Restrictions: </label>
							<textarea rows="4" 
								ref="member2_diet" />
						</div>
						<div class="field">
							<label>Shirt Size: </label>
							<input type="radio"
								id="member2_size_xs"
								name="member2_size"
								value="XS"/> XS
							<input type="radio"
								id="member2_size_s"
								name="member2_size"
								value="S"/> S
							<input type="radio"
								id="member2_size_m"
								name="member2_size"
								value="M"/> M
							<input type="radio"
								id="member2_size_l"
								name="member2_size"
								value="L"/> L
							<input type="radio"
								id="member2_size_xl"
								name="member2_size"
								value="XL"/> XL
						</div>
					</div>
					<div class="member">
						<div class="member-title">
							<h3>Member 3</h3>
						</div>

						<div class="field">
							<label>Name: </label>
							<input type="text" 
								ref="member3_name" />
						</div>
						<div class="field">
							<label>School: </label>
							<input type="text" 
								ref="member3_school"/>
						</div>
						<div class="field">
							<label>Contact no.: </label>
							<input type="text" 
								ref="member3_contact"/>
						</div>
						<div class="field">
							<label>E-mail: </label>
							<input type="text" 
								ref="member3_email"/>
						</div>
						<div class="field">
							<label>Dietary Restrictions: </label>
							<textarea rows="4" 
								ref="member3_diet" />
						</div>
						<div class="field">
							<label>Shirt Size: </label>
							<input type="radio"
								id="member3_size_xs"
								name="member3_size"
								value="XS"/> XS
							<input type="radio"
								id="member3_size_s"
								name="member3_size"
								value="S"/> S
							<input type="radio"
								id="member3_size_m"
								name="member3_size"
								value="M"/> M
							<input type="radio"
								id="member3_size_l"
								name="member3_size"
								value="L"/> L
							<input type="radio"
								id="member3_size_xl"
								name="member3_size"
								value="XL"/> XL
						</div>
					</div>
					<div class="member">
						<div class="member-title">
							<h3>Member 4</h3>
							<h4>(Optional)</h4>
						</div>

						<div class="field">
							<label>Name: </label>
							<input type="text" 
								ref="member4_name" />
						</div>
						<div class="field">
							<label>School: </label>
							<input type="text" 
								ref="member4_school"/>
						</div>
						<div class="field">
							<label>Contact no.: </label>
							<input type="text" 
								ref="member4_contact"/>
						</div>
						<div class="field">
							<label>E-mail: </label>
							<input type="text" 
								ref="member4_email"/>
						</div>
						<div class="field">
							<label>Dietary Restrictions: </label>
							<textarea rows="4" 
								ref="member4_diet" />
						</div>
						<div class="field">
							<label>Shirt Size: </label>
							<input type="radio"
								id="member4_size_xs"
								name="member4_size"
								value="XS"/> XS
							<input type="radio"
								id="member4_size_s"
								name="member4_size"
								value="S"/> S
							<input type="radio"
								id="member4_size_m"
								name="member4_size"
								value="M"/> M
							<input type="radio"
								id="member4_size_l"
								name="member4_size"
								value="L"/> L
							<input type="radio"
								id="member4_size_xl"
								name="member4_size"
								value="XL"/> XL
						</div>
					</div>
				</div>

				<div class="other-container">
					<h2>Other Questions</h2>
					<div class="field">
						<label>Where did you hear about BlueHacks?</label>
						<textarea rows="4"
							ref="other_where" />
					</div>
					<div class="field">
						<label>Why they want to join BlueHacks?</label>
						<textarea rows="4"
							ref="other_why" />
					</div>
					<div class="field">
						<label>What you expect from BlueHacks this year?</label>
						<textarea rows="4"
							ref="other_what" />
					</div>
					<div class="field">
						<label>Do you have any other concerns?</label>
						<h4>If none, enter 'NA'.</h4>
						<textarea rows="4"
							ref="other_concerns" />
					</div>
				</div>

				<center><button id="btn-submit">Submit</button></center>
			</div>
		)
	}
}

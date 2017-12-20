import React from 'react'
import * as firebase from 'firebase';


export default class Register extends React.Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
		this.state = { 
			member1_size: null,
			member2_size: null,
			member3_size: null,
			member4_size: null,
			member1_photo_filename: null,
			member2_photo_filename: null,
			member3_photo_filename: null,
			member4_photo_filename: null,
			member1_photo: null,
			member2_photo: null,
			member3_photo: null,
			member4_photo: null,
			member1_resume: null,
			member2_resume: null,
			member3_resume: null,
			member4_resume: null,
			member1_resume_filename: null,
			member2_resume_filename: null,
			member3_resume_filename: null,
			member4_resume_filename: null,
			member1_shower: null,
			member2_shower: null,
			member3_shower: null,
			member4_shower: null
		}
	}

	handleUpload(e){
		const state_name = e.target.name;
		const state_file = e.target.files[0];
		const state_filename = state_name + "_filename";
		this.setState({ 
			[state_name] : state_file,
			[state_filename] : state_file.name
		});
	}

	handleChange(e) {
		const state_name = e.target.name;
		const state_value = e.target.value;
		this.setState({ [state_name] : state_value });
	}

	handleSubmit(e){
		e.preventDefault();

		const group_name = this.refs.group_name.value;
		const other_where = this.refs.other_where.value;
		const other_what = this.refs.other_what.value;
		const other_concerns = this.refs.other_concerns.value;
		
		const rootRef = firebase.database().ref().child('groups');
		const groupNameRef = rootRef.child(group_name);
		groupNameRef.set({
			other_where: other_where,
			other_what: other_what,
			other_concerns: other_concerns
		});

		const membersRef = groupNameRef.child("members");

		membersRef.child("one").set({
			name: this.refs.member1_name.value,
			school: this.refs.member1_school.value,
			contact: this.refs.member1_contact.value,
			email: this.refs.member1_email.value,
			diet: this.refs.member1_diet.value,
			size: this.state.member1_size,
			shower: this.state.member1_shower
		});

		membersRef.child("two").set({
			name: this.refs.member2_name.value,
			school: this.refs.member2_school.value,
			contact: this.refs.member2_contact.value,
			email: this.refs.member2_email.value,
			diet: this.refs.member2_diet.value,
			size: this.state.member2_size,
			shower: this.state.member2_shower
		});

		membersRef.child("three").set({
			name: this.refs.member3_name.value,
			school: this.refs.member3_school.value,
			contact: this.refs.member3_contact.value,
			email: this.refs.member3_email.value,
			diet: this.refs.member3_diet.value,
			size: this.state.member3_size,
			shower: this.state.member3_shower
		});

		membersRef.child("four").set({
			name: this.refs.member4_name.value,
			school: this.refs.member4_school.value,
			contact: this.refs.member4_contact.value,
			email: this.refs.member4_email.value,
			diet: this.refs.member4_diet.value,
			size: this.state.member4_size,
			shower: this.state.member4_shower
		});

		firebase.storage().ref(group_name+"/photos/member1-"+this.refs.member1_name.value).put(this.state.member1_photo);
		firebase.storage().ref(group_name+"/photos/member2-"+this.refs.member2_name.value).put(this.state.member2_photo);
		firebase.storage().ref(group_name+"/photos/member3-"+this.refs.member3_name.value).put(this.state.member3_photo);
		firebase.storage().ref(group_name+"/photos/member4-"+this.refs.member4_name.value).put(this.state.member4_photo);

		firebase.storage().ref(group_name+"/resumes/member1-"+this.refs.member1_name.value).put(this.state.member1_resume);
		firebase.storage().ref(group_name+"/resumes/member2-"+this.refs.member2_name.value).put(this.state.member2_resume);
		firebase.storage().ref(group_name+"/resumes/member3-"+this.refs.member3_name.value).put(this.state.member3_resume);
		firebase.storage().ref(group_name+"/resumes/member4-"+this.refs.member4_name.value).put(this.state.member4_resume);

		alert("You application has been submitted.");
		window.location.reload(false);
	}

	render(){
		return(
			<form id="register-container" onSubmit={this.handleSubmit}>

				<h1>Register for Blue Hacks 2018</h1>

				<div class="group-name-container">
					<h2>Group name: </h2>
					<input type="text" 
							ref="group_name" 
							onChange={this.handleChange}/>
				</div>

				<h2>Members</h2>
				
				<div class="members-container">
					<div class="member">
						<div class="member-title">
							<h3>Member 1</h3>
							<h4>(Group leader)</h4>
						</div>

						<div class="field basic">
							<label>Name: </label>
							<input type="text" 
								ref="member1_name" required />
						</div>
						<div class="field basic">
							<label>School: </label>
							<input type="text" 
								ref="member1_school" required/>
						</div>
						<div class="field basic">
							<label>Contact no.: </label>
							<input type="text" 
								ref="member1_contact" required/>
						</div>
						<div class="field basic">
							<label>E-mail: </label>
							<input type="text" 
								ref="member1_email" required/>
						</div>
						<div class="field">
							<label>Dietary Restrictions: </label>
							<textarea rows="4"
								ref="member1_diet" required />
						</div>
						<div class="field">
							<span>Shirt Size: </span>
							<label class="radio-label">
								<input type="radio"
									id="member1_size_xs"
									name="member1_size"
									ref="member1_size" 
									value="XS"
									onChange={this.handleChange}/>
								XS
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member1_size_s"
									name="member1_size"
									ref="member1_size" 
									value="S"
									onChange={this.handleChange}/>
								S
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member1_size_m"
									name="member1_size"
									ref="member1_size" 
									value="M"
									onChange={this.handleChange}/>
								M
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member1_size_l"
									name="member1_size"
									ref="member1_size" 
									value="L"
									onChange={this.handleChange}/>
								L
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member1_size_xl"
									name="member1_size"
									ref="member1_size" 
									value="XL"
									onChange={this.handleChange}/>
								XL
							</label>
						</div>
						<div class="field file-input">
							<label>2x2 Photo: </label>
							<div class="btn-upload">
								<label for="member1_photo">Upload image</label>
								<input type="file" id="member1_photo" name="member1_photo" accept="image/x-png,image/gif,image/jpeg" onChange={this.handleUpload} 
								required/>
							</div>
							<p>{this.state.member1_photo_filename}</p>
						</div>
						<div class="field file-input">
							<label>Resume: </label>
							<div class="btn-upload">
								<label for="member1_resume">Upload file</label>
								<input type="file" id="member1_resume" name="member1_resume" onChange={this.handleUpload} 
								 />
							</div>
							<p>{this.state.member1_resume_filename}</p>
						</div>
					</div>
					<div class="member">
						<div class="member-title">
							<h3>Member 2</h3>
						</div>

						<div class="field basic">
							<label>Name: </label>
							<input type="text" 
								ref="member2_name" required />
						</div>
						<div class="field basic">
							<label>School: </label>
							<input type="text" 
								ref="member2_school" required/>
						</div>
						<div class="field basic">
							<label>Contact no.: </label>
							<input type="text" 
								ref="member2_contact" required/>
						</div>
						<div class="field basic">
							<label>E-mail: </label>
							<input type="text" 
								ref="member2_email" required/>
						</div>
						<div class="field">
							<label>Dietary Restrictions: </label>
							<textarea rows="4" 
								ref="member2_diet" required />
						</div>
						<div class="field">
							<span>Shirt Size: </span>
							<label class="radio-label">
								<input type="radio"
									id="member2_size_xs"
									name="member2_size"
									ref="member2_size" 
									value="XS"
									onChange={this.handleChange}/>
								XS
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member2_size_s"
									name="member2_size"
									ref="member2_size"
									value="S"
									onChange={this.handleChange}/>
								S
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member2_size_m"
									name="member2_size"
									ref="member2_size"
									value="M"
									onChange={this.handleChange}/>
								M
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member2_size_l"
									name="member2_size"
									ref="member2_size"
									value="L"
									onChange={this.handleChange}/>
								L
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member2_size_xl"
									name="member2_size"
									ref="member2_size"
									value="XL"
									onChange={this.handleChange}/>
								XL
							</label>
						</div>
						<div class="field file-input">
							<label>2x2 Photo: </label>
							<div class="btn-upload">
								<label for="member2_photo">Upload image</label>
								<input type="file" id="member2_photo" name="member2_photo" accept="image/x-png,image/gif,image/jpeg" onChange={this.handleUpload} 
								 required/>
							</div>
							<p>{this.state.member2_photo_filename}</p>
						</div>
						<div class="field file-input">
							<label>Resume: </label>
							<div class="btn-upload">
								<label for="member2_resume">Upload file</label>
								<input type="file" id="member2_resume" name="member2_resume" onChange={this.handleUpload} 
								 />
							</div>
							<p>{this.state.member2_resume_filename}</p>
						</div>
					</div>
					<div class="member">
						<div class="member-title">
							<h3>Member 3</h3>
						</div>

						<div class="field basic">
							<label>Name: </label>
							<input type="text" 
								ref="member3_name"required />
						</div>
						<div class="field basic">
							<label>School: </label>
							<input type="text" 
								ref="member3_school"required/>
						</div>
						<div class="field basic">
							<label>Contact no.: </label>
							<input type="text" 
								ref="member3_contact"required/>
						</div>
						<div class="field basic">
							<label>E-mail: </label>
							<input type="text" 
								ref="member3_email"required/>
						</div>
						<div class="field">
							<label>Dietary Restrictions: </label>
							<textarea rows="4" 
								ref="member3_diet"required />
						</div>
						<div class="field">
							<span>Shirt Size: </span>
							<label class="radio-label">
								<input type="radio"
									id="member3_size_xs"
									name="member3_size"
									ref="member3_size" 
									value="XS"
									onChange={this.handleChange}/>
								XS
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member3_size_s"
									name="member3_size"
									ref="member3_size" 
									value="S"
									onChange={this.handleChange}/>
								S
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member3_size_m"
									name="member3_size"
									ref="member3_size" 
									value="M"
									onChange={this.handleChange}/>
								M
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member3_size_l"
									name="member3_size"
									ref="member3_size" 
									value="L"
									onChange={this.handleChange}/>
								L
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member3_size_xl"
									name="member3_size"
									ref="member3_size" 
									value="XL"
									onChange={this.handleChange}/>
								XL
							</label>
						</div>
						<div class="field file-input">
							<label>2x2 Photo: </label>
							<div class="btn-upload">
								<label for="member3_photo">Upload image</label>
								<input type="file" id="member3_photo" name="member3_photo" accept="image/x-png,image/gif,image/jpeg" onChange={this.handleUpload} 
								required/>
							</div>
							<p>{this.state.member3_photo_filename}</p>
						</div>
						<div class="field file-input">
							<label>Resume: </label>
							<div class="btn-upload">
								<label for="member3_resume">Upload file</label>
								<input type="file" id="member3_resume" name="member3_resume" onChange={this.handleUpload} 
								/>
							</div>
							<p>{this.state.member3_resume_filename}</p>
						</div>
					</div>
					<div class="member">
						<div class="member-title">
							<h3>Member 4</h3>
							<h4>(Optional)</h4>
						</div>

						<div class="field basic">
							<label>Name: </label>
							<input type="text" 
								ref="member4_name" />
						</div>
						<div class="field basic">
							<label>School: </label>
							<input type="text" 
								ref="member4_school"/>
						</div>
						<div class="field basic">
							<label>Contact no.: </label>
							<input type="text" 
								ref="member4_contact"/>
						</div>
						<div class="field basic">
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
							<span>Shirt Size: </span>
							<label class="radio-label">
								<input type="radio"
									id="member4_size_xs"
									name="member4_size"
									ref="member4_size"
									value="XS"
									onChange={this.handleChange}/>
								XS
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member4_size_s"
									name="member4_size"
									ref="member4_size"
									value="S"
									onChange={this.handleChange}/>
								S
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member4_size_m"
									name="member4_size"
									ref="member4_size"
									value="M"
									onChange={this.handleChange}/>
								M
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member4_size_l"
									name="member4_size"
									ref="member4_size"
									value="L"
									onChange={this.handleChange}/>
								L
							</label>
							<label class="radio-label">
								<input type="radio"
									id="member4_size_xl"
									name="member4_size"
									ref="member4_size"
									value="XL"
									onChange={this.handleChange}/>
								XL
							</label>
						</div>
						<div class="field file-input">
							<label>2x2 Photo: </label>
							<div class="btn-upload">
								<label for="member4_photo">Upload image</label>
								<input type="file" id="member4_photo" name="member4_photo" accept="image/x-png,image/gif,image/jpeg" onChange={this.handleUpload} 
								/>
							</div>
							<p>{this.state.member4_photo_filename}</p>
						</div>
						<div class="field file-input">
							<label>Resume: </label>
							<div class="btn-upload">
								<label for="member4_resume">Upload file</label>
								<input type="file" id="member4_resume" name="member4_resume" onChange={this.handleUpload} 
								/>
							</div>
							<p>{this.state.member4_resume_filename}</p>
						</div>
					</div>
				</div>

				<div class="other-container">
					<h2>Additional Questions</h2>
					<div class="field">
						<label>How did you hear about Blue Hacks?</label>
						<textarea rows="4"
							ref="other_where" required />
					</div>
					<div class="field">
						<label>What do you expect from Blue Hacks this year?</label>
						<textarea rows="4"
							ref="other_what" required />
					</div>
					<div class="field">
						<label>Do you have any other concerns?</label>
						<h4>If none, enter 'NA'.</h4>
						<textarea rows="4"
							ref="other_concerns" required />
					</div>
				</div>

				<center><input id="btn-submit" type="submit" value="Submit"/></center>
			</form>
		)
	}
}

import React from 'react';

export default class Contact extends React.Component {

	render(){
		return(
			<div id="contact-container">
				<div class="contact-form-container">
					<h1 class="pink">Contact us</h1>
					<p>If you have any inquiries regarding this event, please contact us: </p>
					<div class="contact-info ">
						<h2 class="purple">Gab De Jesus</h2>
						Project Head <br/>
						(0977) 310 2768 <br />
						<span class="blue"><a href="mailto:gab.dejesus@compsat.org">gab.dejesus@compsat.org</a></span>
					</div>
					<div class="contact-info ">
						<h2 class="purple">Dion Velasco</h2>
						Project Head <br/>
						(0917) 835 7442 <br />
						<span class="blue"><a href="mailto:dion.velasco@obf.ateneo.edu">dion.velasco@obf.ateneo.edu</a></span>
					</div>
				</div>
			</div>
		);
	}
}
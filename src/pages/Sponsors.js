import React from 'react'

export default class Testimonials extends React.Component {
	render(){
		return(
			<div id="sponsors-container">
				<h1 class="pink">Sponsors</h1>
				<h2 class="orange">Minor Sponsors</h2>
				<div class="logos logos-small">
					<img alt="Smart Logo" src={require('../assets/sponsor-smart.png')} />
				</div>
				<h1 class="pink">In Partnership With</h1>
				<div class="logos logos-small">
					<img alt="Azeus Logo" src={require('../assets/sponsor-azeus.JPG')} />
					<img alt="Rizal Library Logo" src={require('../assets/sponsor-rizal-lib.png')} />
					<img alt="Mozilla Logo" src={require('../assets/sponsor-mozilla.png')} />
				</div>
			</div>
		);
	}
}
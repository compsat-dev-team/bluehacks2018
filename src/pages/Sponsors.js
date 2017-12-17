import React from 'react'

export default class Testimonials extends React.Component {
	render(){
		return(
			<div id="sponsors-container">
				<h1 class="pink">Partners</h1>
				<div class="logos">
					<img alt="Rizal Library Logo" src={require('../assets/sponsor-rizal-lib.png')} />
					<img alt="Mozilla Logo" src={require('../assets/sponsor-mozilla.png')} />
					<img alt="Azeus Logo" src={require('../assets/sponsor-azeus.JPG')} />
				</div>
				<h1 class="orange">Minor Sponsors</h1>
				<div class="logos">
					<img alt="Rizal Library Logo" src={require('../assets/sponsor-smart.png')} />
				</div>
			</div>
		);
	}
}
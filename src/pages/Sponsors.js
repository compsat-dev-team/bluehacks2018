import React from 'react'

export default class Testimonials extends React.Component {
	render(){
		return(
			<div id="sponsors-container">
				<h1 class="pink">We would like to thank our sponsors:</h1>
				<div class="logos">
					<img alt="Azeus Logo" src={require('../assets/sponsor-azeus.JPG')} />
					<img alt="Mozilla Logo" src={require('../assets/sponsor-mozilla.png')} />
				</div>
			</div>
		);
	}
}
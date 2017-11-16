import React from 'react'

export default class Map extends React.Component {
	render(){
		return(
			<div id="map-container">
				<div class="map-title orange">
					<h1>Map to Blue Hacks 2018</h1>
					<h2>
						Rizal Library <br />
						Ateneo de Manila University
					</h2>
				</div>
				<iframe src="https://snazzymaps.com/embed/28331" class="map"></iframe>
			</div>
		);
	}
}
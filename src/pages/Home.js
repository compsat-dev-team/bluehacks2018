import React from 'react'

export default class Home extends React.Component {
	render(){
		return(
			<div class="main-container">
				<div  id="home-container" >
					<img alt="Blue Hacks Logo" src={require('../assets/logo-big.png')} />
					<p>
						<span class="pink"> January 27, 2018 (8:00 AM) to January 28, 2018 (8:00 PM) </span>
						<span class="orange"> 5th Floor, Rizal Library </span>
						<span class="purple"> Ateneo de Manila University </span>
					</p>
				</div>
			</div>
		);
	}
}



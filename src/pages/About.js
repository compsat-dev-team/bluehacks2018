import React from 'react'

export default class About extends React.Component {
	render(){
		return(
			<div class="main-container">
				{/*<div id="about-container">
					<h1>
						<span class="blue">def </span>
						<span class="green"> bluehacks</span>:
					</h1>
					<p>
						Blue Hacks is a two-day <span class="orange">hackathon</span> that invites
						university students to engage in a <span class="orange">collaborative
						application development</span> in a competitive atmosphere. 
						Participants, in <span class="purple">teams of 3-4</span>, will have <span class="purple">24 hours </span> 
						to plan and develop their applications to be pitched 
						to a panel of judges with diverse backgrounds and disciplines.
					</p>
				</div>*/}
				<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS5WveFw9sQH0UkhPcs9AX8XOjDz-yPrlJ0M18UfagXdLHM0AKNH2D650YtYej0Sc5jsrQwZF6SBD7j/embed?start=false&loop=true&delayms=15000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
			</div>
		);
	}
}
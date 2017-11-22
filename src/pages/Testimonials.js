import React from 'react'

export default class Testimonials extends React.Component {
	render(){
		return(
			<div id="testimonials-container">
				<h1>Testimonials</h1>
				<div class="main">
					<div class="photo"><img src={require('../assets/brian.jpg')} /></div>
					<div class="content">
						<p>
							Blue Hacks was a life-changing experience for me. It was so 
							exciting to form a team, figure out how to solve a real problem, 
							and build and pitch an app within 24 hours. It's where we first 
							ideated and prototyped HangTime, which we launched 10 months later 
							and got thousands of students who've used it and love it. I highly 
							recommend Blue Hacks for anyone who wants to accelerate their learning 
							of Web and App Development!
						</p>
						<div class="blue">
							<span><b>Brian Tan</b></span> <br />
							Member of Team Growth Hackers <br />
							Blue Hacks 2016 2nd place winner <br />
							<a href="https://hangtimeapp.com" target="_blank">hangtimeapp.com</a>
						</div>
					</div>
				</div>
				<div class="main">
					<div class="photo"><img src={require('../assets/tup.png')} /></div>
					<div class="content">
						<p>
							Our project for Blue Hacks was entitled “Home”. Our game is a simulation 
							of creating a sustainable city. It’s like Sim City wherein you’re a mayor 
							tasked to raise a city in a sustainable way. We wanted to be able to teach 
							the basics of creating a sustainable city in such a way that is easy to digest 
							by a larger audience of people.

						</p>
						<div class="blue">
							<span><b>Mikee Jazmines</b></span> <br />
							Member of Team Nippy <br />
							Blue Hacks 2017 1nd place winner <br />
							<a href="https://github.com/luisligunas/Blue-Hacks-2017-Nippy" target="_blank">github.com/luisligunas/Blue-Hacks-2017-Nippy</a>
						</div>
					</div>
				</div>
				<div class="main">
					<div class="photo"><img src={require('../assets/mikee.png')} /></div>
					<div class="content">
						<p>
							What I liked about Blue Hacks in general is, aside from the learning experience, there's always a surplus of food to keep you full during the event!
						</p>
						<div class="blue">
							<span><b>Tup Luisking</b></span> <br />
							Member of Team IDK Yet <br />
							Blue Hacks 2017 2nd place winner <br />
							<a href="https://gitlab.com/Anheurystics/BH2017" target="_blank">gitlab.com/Anheurystics/BH2017</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
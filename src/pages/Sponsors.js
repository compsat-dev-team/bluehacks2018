import React from 'react'

export default class Testimonials extends React.Component {
	render(){
		return(
			<div id="sponsors-container">
				<h1 class="pink">Sponsors</h1>
				<h3>Major Sponsor</h3>
				<div class="logos logos-big">
					<img alt="DXC Logo" src={require('../assets/sponsor-dxc.png')} />
				</div>
				<h3>Minor Sponsors</h3>
				<div class="logos logos-small">
					<img alt="Smart Logo" src={require('../assets/sponsor-smart.png')} />
					<img alt="Freelancer Logo" src={require('../assets/sponsor-freelancer.png')} />
				</div>
				<h3>Yearlong Sponsors</h3>
				<div class="logos logos-small">
					<img alt="Accenture Logo" src={require('../assets/sponsor-accenture.png')} />
					<img alt="Azeus Logo" src={require('../assets/sponsor-azeus.JPG')} />
					<img alt="InSync Logo" src={require('../assets/sponsor-insync.png')} />
				</div>
				<h3>Food Sponsor</h3>
				<div class="logos logos-small">
					<img alt="Kamagong Hotel Logo" src={require('../assets/sponsor-kamagong.jpg')} />
				</div>
				<h1 class="pink">Partners</h1>
				<div class="logos logos-small">
					<img alt="Mozilla Logo" src={require('../assets/sponsor-mozilla.png')} />
					<img alt="Rizal Library Logo" src={require('../assets/sponsor-rizal-lib.jpg')} />
				</div>
				<h1 class="pink">Partner Organizations</h1>
				<div class="logos logos-small">
					<img alt="DevSoc Ateneo Logo" src={require('../assets/sponsor-devsocateneo.png')} />
					<img alt="PCOA Logo" src={require('../assets/sponsor-pcoa.png')} />
					<img alt="Developers' Society Logo" src={require('../assets/sponsor-devsoc.png')} />
					<img alt="MISA Logo" src={require('../assets/sponsor-misa.png')} />
					<img alt="Ciper Logo" src={require('../assets/sponsor-cipher.png')} />
					<img alt="Lasallian Computer Society Logo" src={require('../assets/sponsor-lcs.png')} />
				</div>
				
			</div>
		);
	}
}
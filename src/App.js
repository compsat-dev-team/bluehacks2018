import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Map from './pages/Map'
import Testimonials from './pages/Testimonials'
import Register from './pages/Register'
import Contact from './pages/Contact'
import Sponsors from './pages/Sponsors'


class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<div id="navbar">
						<div class="regular-nav">
						<img class="logo" alt="Blue Hacks Logo" src={require('./logo-nav.png')} />
							<ul>
								<li><CustomLink activeOnlyWhenExact={true} to="/" label="Home"/></li>
								<li><CustomLink to="/about" label="About"/></li>
								<li><CustomLink to="/map" label="Map"/></li>
								<li><CustomLink to="/testimonials" label="Testimonials"/></li>
								<li><CustomLink to="/register" label="Register"/></li>
								<li><CustomLink to="/contact" label="Contact"/></li>
								<li><CustomLink to="/sponsors" label="Sponsors"/></li>
							</ul>
						</div>
						<ul class="dropdown-nav">
							<img class="logo" alt="Blue Hacks Logo" src={require('./logo-nav.png')} />
							<div class="btn-drop">
								<div class="menu-bar"></div>
								<div class="menu-bar"></div>
								<div class="menu-bar"></div>
							</div>
							<div class="dropdown-content">
								<li><CustomLink activeOnlyWhenExact={true} to="/" label="Home"/></li>
								<li><CustomLink to="/about" label="About"/></li>
								<li><CustomLink to="/map" label="Map"/></li>
								<li><CustomLink to="/testimonials" label="Testimonials"/></li>
								<li><CustomLink to="/register" label="Register"/></li>
								<li><CustomLink to="/contact" label="Contact"/></li>
								<li><CustomLink to="/sponsors" label="Sponsors"/></li>
							</div>
						</ul>
					</div>

					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/map" component={Map}/>
					<Route path="/testimonials" component={Testimonials}/>
					<Route path="/register" component={Register}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/sponsors" component={Sponsors}/>
				</div>
			</Router>
		);
	}
}

/* CustomLink
 * Adds additional class 'active' to change style of selected link
 */
const CustomLink = ({ label, to, activeOnlyWhenExact }) => (
	<Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
		<Link className={match ? 'active' : ''}to={to}>{label}</Link>
	)}/>
)

export default App;

import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Map from './pages/Map'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Sponsors from './pages/Sponsors'
import ErrorPage from './pages/ErrorPage'


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
								<li><CustomLink to="/contact" label="Contact"/></li>
								<li><CustomLink to="/partners" label="Partners"/></li>
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
								<li><CustomLink to="/contact" label="Contact"/></li>
								<li><CustomLink to="/partners" label="Partners"/></li>

							</div>
						</ul>
					</div>

					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/map" component={Map}/>
						<Route path="/testimonials" component={Testimonials}/>
						<Route path="/contact" component={Contact}/>
						<Route path="/partners" component={Sponsors}/>
						<Route component={ErrorPage}/>
					</Switch>
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

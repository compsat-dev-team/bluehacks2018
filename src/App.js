import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Map from './pages/Map'
import Gallery from './pages/Gallery'
import Register from './pages/Register'
import Contact from './pages/Contact'


class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<div id="navbar">
						<ul>
							<li><CustomLink activeOnlyWhenExact={true} to="/" label="Home"/></li>
							<li><CustomLink to="/about" label="About"/></li>
							<li><CustomLink to="/map" label="Map"/></li>
							<li><CustomLink to="/gallery" label="Gallery"/></li>
							<li><CustomLink to="/register" label="Register"/></li>
							<li><CustomLink to="/contact" label="Contact"/></li>
						</ul>
					</div>

					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/map" component={Map}/>
					<Route path="/gallery" component={Gallery} />
					<Route path="/register" component={Register}/>
					<Route path="/contact" component={Contact}/>
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

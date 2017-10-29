import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Map from './pages/Map'
import Gallery from './pages/Gallery'

class App extends React.Component {
	render() {
		return (
    		<Router>
			    <div>
			    	<div id="navbar">
			    		<ul>
						    <li><Link to="/">Home</Link></li>
						    <li><Link to="/about">About</Link></li>
						    <li><Link to="/map">Map</Link></li>
						    <li><Link to="/gallery">Gallery</Link></li>
				    	</ul>
			    	</div>

					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/map" component={Map}/>
					<Route path="/gallery" component={Gallery}/>
				</div>
			</Router>
    	);
	}
}

export default App;

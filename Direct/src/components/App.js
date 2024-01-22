import React, { useState } from 'react';
import Header from './Header';
import Map from './Map';
import '../css/App.css';
import RoutesData from '../json/Routes.json';
import Sidebar from './JeepneyRoutes';

const App = () => {
	const [selectedRoutes, setSelectedRoute] = useState([]);

	const handleRouteSelect = (selectedRoute) => {
		setSelectedRoute(selectedRoute);
	};
	return (
		<div className='App'>
			<Header />
			<div className='app-body'>
				<Sidebar
					routesData={RoutesData}
					onRouteSelect={handleRouteSelect}
				/>
				<Map
					routesData={RoutesData}
					selectedRoutes={selectedRoutes}
				/>
			</div>
		</div>
	);
};

export default App;

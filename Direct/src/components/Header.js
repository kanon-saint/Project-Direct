import React from 'react';
import '../css/Header.css';
import logo from '../images/direct.png';

const Header = () => {
	return (
		<div>
			<header>
				<div className='logo-container'>
					<img
						src={logo}
						alt='My Logo'
						className='logo'
					/>
				</div>
				<div className='nav-bar'>
					<button>Directions</button>
					<div className='vertical-divider'></div>
					<button>Jeepney Routes</button>
					<div className='vertical-divider'></div>
					<button>Places</button>
				</div>
				<div className='profile'>
					<div className='profile-pic'></div>
				</div>
			</header>
		</div>
	);
};
export default Header;

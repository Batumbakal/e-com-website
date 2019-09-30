import React from 'react';

const MenuItem = ({title, surl}) => (
		<div style={{
			backgroundImage:`url(${surl})`
		}} className="menu-item">
			<div className="menu-button">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);

export default MenuItem;
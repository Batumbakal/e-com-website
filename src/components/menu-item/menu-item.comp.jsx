import React from 'react';
import {withRouter} from 'react-router';

const MenuItem = ({title, surl, history, match}) => (
		<div className="menu-item">
			<div style={{backgroundImage:`url(${surl})`}} className="imgBG"></div>
			<div className="menu-button" onClick={() => history.push(`${match.url}${title}`)}>
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
export default withRouter(MenuItem);
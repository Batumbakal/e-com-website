import React from 'react';
import {withRouter} from 'react-router';

const Header = ({history}) => (
	<header>
		<nav>
			<ul className="h-menu">
				<li className="h-menu-item h-logo">
					<div onClick={() => history.push(`/`)}><img className="logo" src="shoppingcart.png" alt="Shopify Logo"/></div>
				</li>
				<li className="h-menu-item h-about"><div onClick={() => history.push(`/about`)}>ABOUT</div></li>
				<li className="h-menu-item h-signin"><div onClick={() => history.push(`/signIn`)}>SIGN IN</div></li>
				<li className="h-menu-item h-signup"><div onClick={() => history.push(`/signUp`)}>SIGN UP</div></li>
				<li className="h-menu-item h-cart">
					<div onClick={() => history.push(`/cart`)}>
						<img className="cart" src="shoppingbasket.png" alt="Shopify Cart"/>
						<div className="cart-value">0</div>
					</div>
				</li>
			</ul>
		</nav>
	</header>
);

export default withRouter(Header);
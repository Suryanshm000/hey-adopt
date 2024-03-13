import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
		<div className="inner">
			<div className="logo">Hey Adopt</div>
			<div className="burger"></div>
			<nav>
				<Link className="active" to="/">Home</Link>
				<Link>About Us</Link>
				<Link>Our Work</Link>
				<Link>Get Involved</Link>
			</nav>
			<Link className="donate-link">Donate</Link>
		</div>
	</header>
  )
}

export default Header;
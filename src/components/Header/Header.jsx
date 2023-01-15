import "./Header.scss";
import imgLogo from "../../assets/images/logo.svg";

const Header = props => {
	return (
		<header className="header">
			<div className="big-container">
				<nav className="nav">
					<ul className="menu-list menu-left">
						<li className="menu-item">
							<a className="menu-link" href="#menu1">
								{props.data.link1}
							</a>
						</li>
						<li className="menu-item">
							<a className="menu-link" href="#menu1">
								{props.data.link2}
							</a>
						</li>
						<li className="menu-item">
							<a className="menu-link" href="#menu1">
								{props.data.link3}
							</a>
						</li>
						<li className="menu-item">
							<a className="menu-link" href="#menu1">
								{props.data.link4}
							</a>
						</li>
					</ul>
					<a className="logo" href="#l">
						<img className="logo-img" src={imgLogo} alt="logo" />
					</a>
					<ul className="menu-list menu-right">
						<li className="menu-item">
							<a className="menu-link" href="#menu1">
								{props.data.link5}
							</a>
						</li>
						<li className="menu-item">
							<a className="menu-link" href="#menu1">
								{props.data.link6}
							</a>
						</li>
						<li className="menu-item">
							<a className="menu-link" href="#menu1">
								{props.data.link7}
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

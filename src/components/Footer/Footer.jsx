import imgLogo from "../../assets/images/logo.svg";

import styles from "./Footer.module.scss";

const Footer = props => {
	return (
		<footer className={styles.footer}>
			<img className={styles.pic} src={imgLogo} alt="logo" />
		</footer>
	);
};

export default Footer;

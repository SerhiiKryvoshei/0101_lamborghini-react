import React from "react";

import imgLogo from "../../assets/images/logo-footer.svg";
import svgYoutube from "../../assets/images/youtube.svg";
import svgInstagram from "../../assets/images/instagram.svg";
import svgFacebook from "../../assets/images/facebook.svg";

import styles from "./Footer.module.scss";

const Footer = props => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<h3 className={styles.title}>{props.data.title}</h3>
				<div className={styles.top}>
					<ul className={styles.info}>
						<li className={styles.infoItem}>
							<dl>
								<dt className={styles.subtitle}>{props.data.boxFirst.title}</dt>
								<dd className={styles.text}>
									<a href={props.data.boxFirst.rowOneHref}>
										{props.data.boxFirst.rowOne}
									</a>
								</dd>
								<dd className={styles.text}>
									<a href={props.data.boxFirst.rowTwoHref}>
										{props.data.boxFirst.rowTwo}
									</a>
								</dd>
								<dd className={styles.text}>
									<a href={props.data.boxFirst.rowThreeHref}>
										{props.data.boxFirst.rowThree}
									</a>
								</dd>
							</dl>
						</li>
						<li className={styles.infoItem}>
							<dl>
								<dt className={styles.subtitle}>
									{props.data.boxSecond.title}
								</dt>
								<dd className={styles.text}>
									<a href={props.data.boxSecond.rowOneHref}>
										{props.data.boxSecond.rowOne}
									</a>
								</dd>
								<dd className={styles.text}>
									<a href={props.data.boxSecond.rowThreeHref}>
										{props.data.boxSecond.rowThree}
									</a>
								</dd>
							</dl>
						</li>
						<li className={styles.infoItem}>
							<ul className={styles.social}>
								<li>
									<a href="#youtube">
										<img src={svgYoutube} alt="youtube" />
									</a>
								</li>
								<li>
									<a href="#instagram">
										<img src={svgInstagram} alt="instagram" />
									</a>
								</li>
								<li>
									<a href="#facebook">
										<img src={svgFacebook} alt="facebook" />
									</a>
								</li>
							</ul>
						</li>
					</ul>
					<div className={styles.address}>
						<p className={styles.subtitle}>{props.data.boxThird.title}</p>
						<address className={styles.text}>
							{props.data.boxThird.text}
						</address>
						<div id="map">
							<iframe
								title=" "
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12706.549278190689!2d-8.64024468649941!3d37.23258375383699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b24ba76a9eb37%3A0x9be3687ae75e6af!2zODUwMC0xNDgsINCf0L7RgNGC0YPSkdCw0LvRltGP!5e0!3m2!1suk!2sru!4v1673946153243!5m2!1suk!2sru"
								width="454"
								height="253"
								style={{ border: "0" }}
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
				<div className={styles.bottom}>
					<a className={styles.textSmall} href="#design">
						{props.data.design}
					</a>
					<img className={styles.pic} src={imgLogo} alt="logo" />
					<a className={styles.textSmall} href="#privacy">
						{props.data.privacy}
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

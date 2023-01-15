import "./Promo.scss";
import svgArrow from "../../../assets/images/arrow.svg";

const Promo = props => {
	return (
		<section className="promo">
			<div className="big-container">
				<div className="promo__inner">
					<h1 className="title">{props.data.title}</h1>
					<h2 className="subtitle">
						{props.data.subtitle}
						<span>{props.data.period}</span>
					</h2>
					<p className="promo__text">{props.data.text}</p>
					<a className="promo__arrow" href="#a">
						<img src={svgArrow} alt="arrow" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Promo;

import evoCar from "../../../assets/images/evo-car.png";
import iconVideo from "../../../assets/images/video-icon.svg";

import styles from "./Evo.module.scss";

const Evo = props => {
	const features = props.data.features;

	return (
		<section className={styles.evo}>
			<div className={styles.boxBlack}>
				<div className="container">
					<div className={styles.blackInner}>
						<div className={styles.blackInfo}>
							<h3 className={styles.title}>{props.data.title}</h3>
							<div className={styles.blackInfoBox}>
								<p className={styles.text}>{props.data.textFirst}</p>
								<p className={styles.text}>{props.data.textSecond}</p>
							</div>
						</div>
						<img
							className={styles.pic}
							src={evoCar}
							alt="Huracán Super Trofeo EVO"
						/>
						<dl className={styles.descrList}>
							<div>
								<dd>{features.parameter1.description}</dd>
								<dt>{features.parameter1.value}</dt>
							</div>
							<div>
								<dd>{features.parameter2.description}</dd>
								<dt>{features.parameter2.value}</dt>
							</div>
							<div>
								<dd>{features.parameter3.description}</dd>
								<dt>{features.parameter3.value}</dt>
							</div>
							<div>
								<dd>{features.parameter4.description}</dd>
								<dt>{features.parameter4.value}</dt>
							</div>
							<div>
								<dd>{features.parameter5.description}</dd>
								<dt>{features.parameter5.value}</dt>
							</div>
						</dl>
					</div>
				</div>
			</div>
			<div className={styles.boxWhite}>
				<div className="container">
					<div className={styles.whiteInner}>
						<p className={styles.text}>{props.data.textThird}</p>
						<p className={styles.text}>{props.data.textFourth}</p>
						<p className={styles.text}>{props.data.textFifth}</p>
						<div className={styles.video}>
							<a className={styles.videoLink} href="#s">
								<img className={styles.pic} src={iconVideo} alt="video" />
								<span>{props.data.watchOnline}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Evo;

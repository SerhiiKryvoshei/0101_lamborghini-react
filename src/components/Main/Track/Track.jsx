import pngTrack from "../../../assets/images/track.png";
import styles from "./Track.module.scss";

const Track = props => {
	return (
		<section className={styles.track}>
			<div className="container">
				<div className={styles.inner}>
					<h3 className={styles.title}>{props.data.title}</h3>
					<p className={styles.text}>{props.data.text}</p>
					<img className={styles.pic} src={pngTrack} alt="track" />
				</div>
			</div>
		</section>
	);
};

export default Track;

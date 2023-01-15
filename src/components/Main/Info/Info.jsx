import classnames from "classnames";
import imgPortimao from "../../../assets/images/portimao.jpg";
import imgLandfill from "../../../assets/images/polygon.png";

import styles from "./Info.module.scss";

const Info = props => {
	return (
		<section className={classnames(styles.info)}>
			<div className="container">
				<div className={classnames(styles.part, styles.modifierFirst)}>
					<h3 className={styles.title}>{props.data.titleDescription}</h3>
					<div className={styles.textbox}>
						<p className={styles.text}>{props.data.textLeft}</p>
						<p className={classnames(styles.text, styles.modifierBold)}>
							{props.data.textRight}
						</p>
					</div>
					<img className={styles.pic} src={imgPortimao} alt="Portimao" />
				</div>
				<div className={classnames(styles.part, styles.partSecond)}>
					<div className={styles.content}>
						<h3 className={classnames(styles.title)}>
							{props.data.titleAbout}
						</h3>
						<p className={styles.text}>{props.data.textTop}</p>
						<p className={styles.text}>{props.data.textBottom}</p>
					</div>
					<img className={styles.pic} src={imgLandfill} alt="landfill" />
				</div>
				<div
					className={classnames(
						styles.part,
						styles.partThird,
						styles.modifierThird
					)}
				>
					<div className={styles.content}>
						<h3 className={classnames(styles.title)}>
							{props.data.titleCalendar}
						</h3>
						<p className={styles.text}>{props.data.textCalendar}</p>
					</div>
					<table className={styles.table}>
						<tr>
							<td>{props.data.steps.step1.name}</td>
							<td>{props.data.steps.step1.city}</td>
							<td>{props.data.steps.step1.period}</td>
						</tr>
						<tr>
							<td>{props.data.steps.step2.name}</td>
							<td>{props.data.steps.step2.city}</td>
							<td>{props.data.steps.step2.period}</td>
						</tr>
						<tr>
							<td>{props.data.steps.step3.name}</td>
							<td>{props.data.steps.step3.city}</td>
							<td>{props.data.steps.step3.period}</td>
						</tr>
						<tr>
							<td>{props.data.steps.step4.name}</td>
							<td>{props.data.steps.step4.city}</td>
							<td>{props.data.steps.step4.period}</td>
						</tr>
						<tr>
							<td>{props.data.steps.step5.name}</td>
							<td>{props.data.steps.step5.city}</td>
							<td>{props.data.steps.step5.period}</td>
						</tr>
						<tr>
							<td>{props.data.steps.step6.name}</td>
							<td>{props.data.steps.step6.city}</td>
							<td>{props.data.steps.step6.period}</td>
						</tr>
						<tr>
							<td>{props.data.steps.step7.name}</td>
							<td>{props.data.steps.step7.city}</td>
							<td>{props.data.steps.step7.period}</td>
						</tr>
					</table>
				</div>
			</div>
		</section>
	);
};

export default Info;

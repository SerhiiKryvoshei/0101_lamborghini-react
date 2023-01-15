// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

import jpgBlogFirst from "../../../assets/images/blog-1.jpg";
import jpgBlogSecond from "../../../assets/images/blog-2.jpg";
import pngQuotes from "../../../assets/images/quotes.png";

import styles from "./Blog.module.scss";
import "./slider.css";

const BlogItem = props => {
	return (
		<div>
			<img className={styles.pic} src={props.img} alt="blog pic" />
			<h4 className={styles.subtitle}>{props.data.subtitle}</h4>
			<p className={styles.text}>{props.data.text}</p>
			<a
				className={styles.itemLink}
				target="_blank"
				href="https://uk.reactjs.org/"
				rel="noreferrer"
			>
				{props.data.textLink}
			</a>
		</div>
	);
};

const Blog = props => {
	const quotes = props.data.quotes;

	return (
		<section className={styles.blog}>
			<div className="container">
				<h3 className={styles.title}>{props.data.title}</h3>
				<div className={styles.slider}>
					<Swiper
						navigation={true}
						modules={[Navigation]}
						slidesPerView={2}
						spaceBetween={20}
						className="mySwiper"
					>
						<SwiperSlide>
							<BlogItem data={props.data.itemFirst} img={jpgBlogFirst} />
						</SwiperSlide>
						<SwiperSlide>
							<BlogItem data={props.data.itemSecond} img={jpgBlogSecond} />
						</SwiperSlide>
						<SwiperSlide>
							<BlogItem data={props.data.itemFirst} img={jpgBlogFirst} />
						</SwiperSlide>
						<SwiperSlide>
							<BlogItem data={props.data.itemSecond} img={jpgBlogSecond} />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className={styles.quotes}>
					<div className={styles.box}>
						<blockquote>
							<cite className={styles.name}>
								<span>{quotes.quoteFirst.position}</span>
								{quotes.quoteFirst.name}
							</cite>
							<p>{quotes.quoteFirst.text}</p>
						</blockquote>
						<blockquote>
							<cite className={styles.name}>
								<span>{quotes.quoteSecond.position}</span>
								{quotes.quoteSecond.name}
							</cite>
							<p>{quotes.quoteSecond.text}</p>
						</blockquote>
					</div>
					<img className={styles.picture} src={pngQuotes} alt="quotes pic" />
				</div>
			</div>
		</section>
	);
};

export default Blog;

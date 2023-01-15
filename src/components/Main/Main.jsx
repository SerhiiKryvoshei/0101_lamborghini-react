// import React from "react";
import Promo from "./Promo/Promo";
import Info from "./Info/Info";
import Track from "./Track/Track";
import Evo from "./Evo/Evo";
import Blog from "./Blog/Blog";

import "./Main.scss";

const Main = props => {
	return (
		<main className="main">
			<Promo data={props.data.Promo} />
			<Info data={props.data.Info} />
			<Track data={props.data.Track} />
			<Evo data={props.data.Evo} />
			<Blog data={props.data.Blog} />
		</main>
	);
};

export default Main;

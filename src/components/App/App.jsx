import "./App.scss";
import JsonData from "../../data/data.json";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
	return (
		<>
			<Header data={JsonData.Header} />
			<Main data={JsonData.Main} />
			<Footer data={JsonData.Footer} />
		</>
	);
}

export default App;

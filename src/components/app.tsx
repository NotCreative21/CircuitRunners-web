import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./navbar";
//
import { Home } 		from "./home";
import { About } 		from "./about";
import { Brand } 		from "./brand";
import { Sponsors } 	from "./sponsors";

function App() {
	return (<>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/"      		element={<Home 		/>}/>
				<Route path="/about" 		element={<About 	/>}/>
				<Route path="/Brand" 		element={<Brand 	/>}/>
				<Route path="/Sponsors" 	element={<Sponsors 	/>}/>
			</Routes>
		</BrowserRouter>
	</>);
}

//ReactDOM.render(<App/>, document.getElementById("root"));
export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./navbar";
import ReactDOM from "react-dom";
//
import { Home } 		from "./home";
import { About } 		from "./about";
import { Brand } 		from "./brand";
import { Support } 		from "./support";

function App() {
	return (<>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/"      		element={<Home 		/>}/>
				<Route exact path="/about" 		element={<About 	/>}/>
				<Route exact path="/Brand" 		element={<Brand 	/>}/>
				<Route exact path="/Support" 	element={<Support 	/>}/>
			</Routes>
		</BrowserRouter>
	</>);
}

ReactDOM.render(<App/>, document.getElementById("root"));
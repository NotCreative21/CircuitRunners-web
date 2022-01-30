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
				<Route path="/"      		element={<Home 		/>}/>
				<Route path="/about" 		element={<About 	/>}/>
				<Route path="/Brand" 		element={<Brand 	/>}/>
				<Route path="/Support" 	    element={<Support 	/>}/>
			</Routes>
		</BrowserRouter>
	</>);
}

ReactDOM.render(<App/>, document.getElementById("root"));

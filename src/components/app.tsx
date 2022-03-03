import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./navbar";
import { Home } from "./home";
import { Teams } from "./teams";
import { Outreach } from "./outreach";
import { Sponsors } from "./sponsors";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Teams" element={<Teams />} />
					<Route path="/Outreach" element={<Outreach />} />
					<Route path="/Sponsors" element={<Sponsors />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./screens/Signup";
import LoginPage from "./screens/Login";
import TodosPage from "./screens/Todos";

function App() {
	return (
		<div className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-stone-100">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/todos" element={<TodosPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

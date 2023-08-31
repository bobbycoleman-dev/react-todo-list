import logo from "./logo.svg";
import "./App.css";
import Todo from "./views/Todo";

function App() {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-6xl">Todo List</h1>
			<Todo />
		</div>
	);
}

export default App;

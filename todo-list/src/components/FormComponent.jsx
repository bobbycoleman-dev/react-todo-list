import { useState } from "react";

const FormComponent = (props) => {
	const [todoItem, setTodoItem] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addTodo({ todoItem: todoItem, isComplete: false });
		setTodoItem("");
	};

	return (
		<div className="mt-3 w-full text-center">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="input input-bordered input-success w-full max-w-xs"
					value={todoItem}
					onChange={(e) => setTodoItem(e.target.value)}
				/>
				<div className="text-center">
					<button className="btn btn-success w-1/3 mt-3 hover:btn-accent">Add</button>
				</div>
			</form>
		</div>
	);
};

export default FormComponent;

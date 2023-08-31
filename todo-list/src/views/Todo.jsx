import { useState, useEffect } from "react";
import DisplayTodoComponent from "../components/DisplayTodoComponent";
import FormComponent from "../components/FormComponent";

const Todo = (props) => {
	const getList = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

	const [todoList, setTodoList] = useState(getList);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todoList));
	}, [todoList]);

	const addTodo = (newTodo) => {
		setTodoList([...todoList, newTodo]);
	};

	const markComplete = (idx) => {
		const newTodos = todoList.map((todo, i) => {
			if (idx === i) {
				const updatedTask = { ...todo, isComplete: !todo.isComplete };
				return updatedTask;
			}
			return todo;
		});
		setTodoList(newTodos);
	};

	const deleteItem = (todoIdx) => {
		const newTodos = todoList.filter((todo, idx) => idx !== todoIdx);
		setTodoList(newTodos);
	};

	return (
		<div className="card shadow-lg mt-3 w-1/2 bg-neutral">
			<div className="card-title flex justify-center">
				<FormComponent addTodo={addTodo} />
			</div>
			<div className="card-body">
				<h2 className="text-3xl text-center">Todo's</h2>
				<DisplayTodoComponent todoList={todoList} markComplete={markComplete} deleteItem={deleteItem} />
			</div>
		</div>
	);
};

export default Todo;

const DisplayTodoComponent = (props) => {
	const markComplete = (idx) => {
		props.markComplete(idx);
	};

	return (
		<div>
			{props.todoList.map((todo, idx) => {
				return (
					<div className="my-4 p-3 flex items-center border rounded" key={idx}>
						<div className="w-4/5 flex items-center">
							<input
								type="checkbox"
								className="me-3 checkbox-sm checkbox-success"
								checked={todo.isComplete}
								onChange={() => markComplete(idx)}
							/>
							{todo.isComplete ? (
								<p className="inline me-3">
									<s>{todo.todoItem}</s>
								</p>
							) : (
								<p className="inline me-3">{todo.todoItem}</p>
							)}
						</div>

						{todo.isComplete ? (
							<div className="w-1/5 text-end">
								<button
									className="btn btn-error btn-sm m-0 shadow-md hover:btn-secondary"
									onClick={() => props.deleteItem(idx)}>
									Delete
								</button>
							</div>
						) : (
							""
						)}
					</div>
				);
			})}
		</div>
	);
};

export default DisplayTodoComponent;

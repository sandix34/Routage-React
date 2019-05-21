import React from 'react';


// const Todos = (props) => On récupère directement la props qui nous interesse { todos }
const Todos = ({ todos }) => {
	console.log('todos', todos);
	
	return (
		<div>
			<ul>
				{/* teste si todos à une valeur true si oui on mape */}
				{ todos && todos.map(todo => (
					<li key={todo.id}>{todo.title}</li>
				)) }
			</ul>
		</div>
	);
}

export default Todos;
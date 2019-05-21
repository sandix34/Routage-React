import React from 'react';
import Todo from './Todo';


// const Todos = (props) => On récupère directement la props qui nous interesse { todos }
const Todos = ({ todos }) => {
	console.log('todos', todos);
	
	return (
		<div>
			<ul className="todos">
				{/* teste si todos à une valeur true si oui on mape */}
				{ todos && todos.map(todo => (
					<Todo key={todo.id} todo={todo}/>
				)) }
			</ul>
		</div>
	);
}

export default Todos;
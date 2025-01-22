import classNames from 'classnames';
import { Todo } from '../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {/* This todo is an active todo */}
      {todos &&
        todos.map(currentTodo => (
          <div
            data-cy="Todo"
            className={classNames('todo', 'item-enter-done', {
              completed: currentTodo.completed,
            })}
            key={currentTodo.id}
          >
            <label className="todo__status-label">
              <input
                data-cy="TodoStatus"
                type="checkbox"
                className="todo__status"
                checked={currentTodo.completed}
              />
            </label>

            <span data-cy="TodoTitle" className="todo__title">
              {currentTodo.title}
            </span>
            <button type="button" className="todo__remove" data-cy="TodoDelete">
              ×
            </button>

            <div data-cy="TodoLoader" className="modal overlay">
              <div className="modal-background has-background-white-ter" />
              <div className="loader" />
            </div>
          </div>
        ))}
    </section>
  );
};

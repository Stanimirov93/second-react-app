import TodoList from "../components/todo/TodoList";

function ToDoPage() {
  return (
    <section>
      <div>
        <h2>to do page</h2>
        <TodoList text="Container 1" />
        <TodoList text="Container 2" />
        <TodoList text="Container 3" />
      </div>
    </section>
  );
}

export default ToDoPage;

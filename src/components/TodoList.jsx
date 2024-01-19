import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  // HOOKS
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetchTodoList();
  }, []);

  async function fetchTodoList() {
    console.log("calling API");
    try {
      const resp = await fetch(
        "https://solid-terrapin-usefully.ngrok-free.app/api/collections/todoList/records"
      );
      const result = await resp.json();
      setTodoList(result.items);
    } catch (err) {
      console.log(err);
    }
  }
  function handleInput(e) {
    setInputValue(e.target.value);
  }
  async function handleAdd() {
    if (inputValue === "" || inputValue.trim() === "") {
      return;
    }

    try {
      const resp = await fetch(
        "https://solid-terrapin-usefully.ngrok-free.app/api/collections/todoList/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: inputValue,
            done: false,
          }),
        }
      );
      const result = await resp.json();
      console.log(result);
      await fetchTodoList();
    } catch (err) {
      console.log(err);
    }

    setInputValue("");
  }

  return (
    <div className="w-80 h-80 border bg-gray-700 flex flex-col justify-start border-white rounded-md p-4">
      <div>🪴 Todo List</div>
      {todoList.map((item) => {
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            name={item.name}
            done={item.done}
          />
        );
      })}
      <div className="flex justify-start items-center gap-2">
        +{" "}
        <input
          value={inputValue}
          onChange={handleInput}
          placeholder="Enter tasks, ideas, notes"
          type="text"
          className="h-4 bg-gray-700 border-none flex-1"
        />
      </div>
      <div
        onClick={handleAdd}
        className="bg-white text-black w-14 h-6 hover:cursor-pointer"
      >
        Add
      </div>
    </div>
  );
}

export default TodoList;

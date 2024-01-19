import { useState } from "react";

function TodoItem({ name, done, id }) {
  const [checked, setChecked] = useState(done);

  async function handleCheckBox(e) {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        done: e.target.checked,
      }),
    };
    try {
      const resp = await fetch(
        `https://solid-terrapin-usefully.ngrok-free.app/api/collections/todoList/records/${id}`,
        options
      );
      if (resp.ok) {
        const data = await resp.json();
        console.log(data);
        setChecked(data.done);
      } else {
        throw new Error("Error fetching server");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex justify-start gap-4">
      <input checked={checked} onChange={handleCheckBox} type="checkbox" />
      <span className={checked ? "line-through" : ""}>{name}</span>
    </div>
  );
}

export default TodoItem;

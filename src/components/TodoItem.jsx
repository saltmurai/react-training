/* eslint-disable react/prop-types */
function TodoItem({name, done}) {
  return (
    <div className="flex justify-start gap-4">
      <input defaultChecked={done} type="checkbox" />
      <span className={done ? "line-through" : ""}>{name}</span>
    </div>
  );
}

export default TodoItem;

"use client";

type TodoProps = {
  id: string;
  title: string;
  checked: boolean;
  setChecked: (id: string, checked: boolean) => void;
};
const Todo = ({ id, title, checked, setChecked }: TodoProps) => {
  return (
    <li className="pl-4 list-none flex gap-4">
      <input
        type="checkbox"
        id={id}
        defaultChecked={checked}
        className="cursor-pointer peer"
        onChange={() => setChecked(id, checked)}
      />
      <label
        className="peer-checked:line-through peer-checked:text-slate-500"
        htmlFor={id}
      >
        {title}
      </label>
    </li>
  );
};

export default Todo;

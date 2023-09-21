import Link from "next/link";
import prisma from "@/db";
import { redirect } from "next/navigation";

const NewTodo = () => {
  const addTodo = async (data: FormData) => {
    "use server";
    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length == 0) {
      return new Error("Invalid Title");
    }
    await prisma.todo.create({ data: { title: title, checked: false } });
    redirect("/");
  };
  return (
    <div className="newTodo">
      <header className=" mb-6">
        <h1 className="text-2xl">New</h1>
      </header>
      <>
        <form action={addTodo} className="flex flex-col items-center gap-4">
          <input
            type="text"
            name="title"
            className="bg-transparent border border-slate-300 rounded outline-none px-2 py-1 w-full"
          />
          <div className="btns flex justify-end items-center gap-2 w-full">
            <button className="border border-slate-300 rounded px-2 py-1 text-slate-300 hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
              Create
            </button>
            <Link
              href={"/"}
              className="border border-slate-300 rounded px-2 py-1 text-slate-300 hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            >
              Cancel
            </Link>
          </div>
        </form>
      </>
    </div>
  );
};

export default NewTodo;

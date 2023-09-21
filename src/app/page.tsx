import Link from "next/link";
import prisma from "@/db";
import Todo from "@/components/Todo";

const Home = async () => {
  const todos = await prisma.todo.findMany();
  const setChecked = async (id: string, checked: boolean) => {
    "use server";
    await prisma.todo.update({ data: { checked: !checked }, where: { id } });
  };
  return (
    <div className="home ">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 rounded px-2 py-1 text-slate-300 hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href={"/new"}
        >
          New
        </Link>
      </header>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} setChecked={setChecked} />
      ))}
    </div>
  );
};

export default Home;

import axios from "axios";
import { randomUUID } from "crypto";

async function getBlogs() {
  let res = await axios.get("http://localhost:3000/api/v1/user/todo");
  return res.data;
}

export default async function blogs() {
  const blogs = await getBlogs(); // this is how server side rendering is done
  return (
    <div>
      {blogs.map((blog: ITodo) => (
        <Todo
          title={blog.title}
          completed={blog.completed}
          key={randomUUID()}
        />
      ))}
    </div>
  );
}

interface ITodo {
  title: string;
  completed: boolean;
}
function Todo({ title, completed }: ITodo) {
  return (
    <div className="m-4">
      <p>{title}</p>
      <p>{completed ? "User completed" : "User is a lazy ass"}</p>
    </div>
  );
}

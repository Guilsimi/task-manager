import { Search, X, CircleX, CircleCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteClick }) {
  const navigate = useNavigate();

  function seeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }

  return (
    <ul className="bg-amber-100 p-5 rounded-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`w-full bg-amber-300 text-amber-50 m-2 p-5 rounded-md flex items-center gap-2`}
          >
            {(!task.isCompleted && (
              <CircleX className="text-red-500"></CircleX>
            )) ||
              (task.isCompleted && (
                <CircleCheck className="text-green-500"></CircleCheck>
              ))}
            {task.title}
          </button>
          <Button onClick={() => seeDetailsClick(task)}>
            <Search></Search>
          </Button>
          <Button onClick={() => onDeleteClick(task.id)}>
            <X></X>
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

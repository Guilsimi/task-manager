import { Undo2 } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "./Header";

function TaskPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-amber-300 p-6 space-y-2">
      <div className="flex justify-center relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-0 bottom-0 text-amber-50"
        >
          <Undo2></Undo2>
        </button>
        <Header>Tarefa</Header>
      </div>
      <div className="space-y-4 bg-amber-100 p-5 rounded-md flex flex-col text-center">
        <h1 className="text-amber-500 font-bold">{title}</h1>
        <p className="text-amber-500">{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;

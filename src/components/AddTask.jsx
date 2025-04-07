import { useState } from "react";
import Input from "./Input";

function AddTask({ onSubmitNewTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 bg-amber-100 p-5 rounded-md flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Adicione um título e uma descrição");
          } else {
            onSubmitNewTask(title, description);
            setTitle("");
            setDescription("");
          }
        }}
        className="bg-amber-300 text-amber-50 px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;

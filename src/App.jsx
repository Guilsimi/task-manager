import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onSubmitNewTask(title, description) {
    const newTask = {
      id: tasks[tasks.length - 1] != null ? tasks[tasks.length - 1].id + 1 : 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-amber-300 p-5 flex justify-center">
      <div className=" w-[500px] space-y-2">
        <Header>Gerenciador de Tarefas</Header>
        <AddTask onSubmitNewTask={onSubmitNewTask}></AddTask>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteClick={onDeleteClick}
        ></Tasks>
      </div>
    </div>
  );
}

export default App;

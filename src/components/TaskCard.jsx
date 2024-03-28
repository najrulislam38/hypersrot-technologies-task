import { InformationCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import DeleteTask from "./DeleteTask";

const TaskCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const task = {
    id: 1,
    status: "pending",
    title: "Task",
    description:
      "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
    date: "2023-08-28",
    assignedTo: "Najrul Islam",
    priority: "P0",
  };

  return (
    <div className="bg-gray-100 rounded-md p-3 m-2">
      <div className="flex flex-row justify-between items-center border-b border-black pb-2 ">
        <h1 className={`text-lg font-semibold  }`}>{task?.title}</h1>
        <button className="bg-primary text-xs p-0.5 font-semibold text-white rounded">
          {task.priority}
        </button>
      </div>
      <p className="mb-3 text-sm pt-2 text-gray-800">{task?.description}</p>
      <div className="flex justify-between items-center relative">
        <h3 className="text-sm font-semibold italic">{task?.assignedTo}</h3>

        <div>
          <button className="p-0.5 bg-primary text-white rounded-md">
            <InformationCircleIcon className="w-4 h-4 " />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border p-0.5 rounded ml-3"
          >
            <TrashIcon className="w-4 h-4 text-red-500 " />
          </button>
          <DeleteTask
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={task.title}
          ></DeleteTask>
        </div>
      </div>
      <button className="px-3 py-1 mt-3 font-medium text-sm bg-primary text-white relative overflow-hidden group z-10 duration-300 hover:bg-primary/95 rounded-sm active:scale-90">
        Assign
      </button>
    </div>
  );
};

export default TaskCard;

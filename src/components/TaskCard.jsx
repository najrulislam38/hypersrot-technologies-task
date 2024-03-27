import { InformationCircleIcon } from "@heroicons/react/24/outline";

const TaskCard = () => {
  const task = {
    id: 1,
    status: "pending",
    title: "Task",
    description:
      "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
    date: "2023-08-28",
    assignedTo: "Mir Hussain",
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
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold italic">{task?.assignedTo}</p>
        <button className="p-0.5 bg-primary text-white rounded-md">
          <InformationCircleIcon className="w-4 h-4 " />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

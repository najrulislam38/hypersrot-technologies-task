import { InformationCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import DeleteTask from "./DeleteTask";
import PropTypes from "prop-types";
import UpdateTask from "./UpdateTask";

const TaskCard = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

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
        <h3 className="text-sm font-semibold italic">
          {task?.assignee && `@${task?.assignee}`}
        </h3>

        <div>
          <button
            onClick={() => setIsUpdate(!isUpdate)}
            className="p-0.5 bg-primary text-white rounded-md"
          >
            <InformationCircleIcon className="w-4 h-4 " />
            <UpdateTask isOpen={isUpdate} setIsOpen={setIsUpdate} task={task} />
          </button>
          {task?.status !== "completed" && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border p-0.5 rounded ml-3"
            >
              <TrashIcon className="w-4 h-4 text-red-500 " />
            </button>
          )}
          <DeleteTask
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            task={task}
          ></DeleteTask>
        </div>
      </div>
      <button className="px-3 py-1 mt-3 font-medium text-sm bg-primary text-white relative overflow-hidden group z-10 duration-300 hover:bg-primary/95 rounded-sm active:scale-90">
        Assign
      </button>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;

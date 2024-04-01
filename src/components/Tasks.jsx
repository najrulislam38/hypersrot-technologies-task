import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const Tasks = () => {
  const { tasks } = useSelector((state) => state.tasks);

  const paddingTask = tasks.filter((task) => task?.status === "pending");
  const inProgressTask = tasks.filter((task) => task?.status === "inProgress");
  const completedTask = tasks.filter((task) => task?.status === "completed");
  const deployTask = tasks.filter((task) => task?.status === "deploy");
  const deferredTask = tasks.filter((task) => task?.status === "deferred");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-5">
      {/* Pending tasks */}
      <div className="h-fit bg-white rounded">
        <h3 className="bg-gray-400 text-center py-2 font-semibold text-white rounded-tl rounded-tr">
          Pending
        </h3>
        <div>
          {paddingTask?.map((task) => (
            <TaskCard key={task?.id} task={task}></TaskCard>
          ))}
        </div>
      </div>
      {/* In progress tasks */}
      <div className="h-fit bg-white rounded">
        <h3 className="bg-[#E89923] text-center py-2 font-semibold text-white rounded-tl rounded-tr">
          In Progress
        </h3>
        <div>
          {inProgressTask?.map((task) => (
            <TaskCard key={task?.id} task={task}></TaskCard>
          ))}
        </div>
      </div>
      {/* completed tasks */}
      <div className="h-fit bg-white rounded">
        <h3 className="bg-green-600 text-center py-2 font-semibold text-white rounded-tl rounded-tr">
          Completed
        </h3>
        <div>
          {completedTask?.map((task) => (
            <TaskCard key={task?.id} task={task}></TaskCard>
          ))}
        </div>
      </div>
      {/* Deployed tasks */}
      <div className="h-fit bg-white rounded">
        <h3 className="bg-violet-950 text-center py-2 font-semibold text-white rounded-tl rounded-tr">
          Deployed
        </h3>
        <div>
          {deployTask?.map((task) => (
            <TaskCard key={task?.id} task={task}></TaskCard>
          ))}
        </div>
      </div>
      {/* deferred tasks */}
      <div className="h-fit bg-white rounded">
        <h3 className="bg-[#F68870] text-center py-2 font-semibold text-white rounded-tl rounded-tr">
          Deferred
        </h3>
        <div>
          {deferredTask?.map((task) => (
            <TaskCard key={task?.id} task={task}></TaskCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;

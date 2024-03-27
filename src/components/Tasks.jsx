import TaskCard from "./TaskCard";

const Tasks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-5">
      {/* Pending tasks */}
      <div className="h-full bg-white rounded">
        <h3 className="bg-gray-400 text-center py-2 font-semibold text-white rounded-tl rounded-tr">
          Pending
        </h3>
        <div>
          <TaskCard />
          <TaskCard />
        </div>
      </div>
      {/* In progress tasks */}
      <div className="h-full bg-white rounded">
        <h3 className="bg-[#E89923] text-center py-2 font-semibold text-white rounded-tl rounded-tr">
          In Progress
        </h3>
        <div>
          <TaskCard />
          <TaskCard />
        </div>
      </div>
      {/* completed tasks */}
      <div className="h-full bg-white rounded">
        <h3 className="bg-green-600 text-center py-2 font-semibold text-white rounded-tl rounded-tr">
          Completed
        </h3>
        <div>
          <TaskCard />
        </div>
      </div>
      {/* Deployed tasks */}
      <div className="h-full bg-white rounded">
        <h3 className="bg-violet-950 text-center py-2 font-semibold text-white rounded-tl rounded-tr">
          Deployed
        </h3>
        <div>
          <TaskCard />
          <TaskCard />
        </div>
      </div>
      {/* deferred tasks */}
      <div className="h-full bg-white rounded">
        <h3 className="bg-[#F68870] text-center py-2 font-semibold text-white rounded-tl rounded-tr">
          Deferred
        </h3>
        <div>
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default Tasks;

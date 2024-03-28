import Modal from "./ui/Modal";
import PropTypes from "prop-types";

const AddNewTask = ({ isOpen, setIsOpen }) => {
  // get today
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} headTitle={"Create A Task"}>
        <div className="px-6 py-5">
          <form className="space-y-3">
            <div className="flex justify-between items-center gap-5">
              <label htmlFor="title" className="font-semibold">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="rounded w-2/3 py-1 focus:border-gray-500  bg-gray-200 focus:bg-white"
              />
            </div>
            <div className="flex justify-between items-center gap-5">
              <label htmlFor="description" className="font-semibold">
                Description:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="rounded w-2/3 focus:border-gray-500  bg-gray-200 focus:bg-white"
              />
            </div>
            <div className="flex justify-between items-center gap-5">
              <label htmlFor="team" className="font-semibold">
                Team:
              </label>
              <input
                type="text"
                id="team"
                name="team"
                className="rounded w-2/3 py-1 focus:border-gray-500  bg-gray-200 focus:bg-white"
              />
            </div>
            <div className="flex flex-wrap justify-between items-center gap-5">
              <label htmlFor="Assignee" className="font-semibold">
                Assignee:
              </label>
              <input
                type="text"
                id="Assignee"
                name="Assignee"
                className="rounded w-2/3 py-1 focus:border-gray-500  bg-gray-200 focus:bg-white"
              />
            </div>
            <div className="flex justify-between items-center gap-5 ">
              <label htmlFor="priority" className="font-semibold">
                Priority:
              </label>
              <select
                name="priority"
                id="priority"
                className=" w-2/3 py-1 focus:border-gray-500 rounded bg-gray-200 focus:bg-white"
              >
                <option value="p0">P0</option>
                <option value="p1">P1</option>
                <option value="p2">P2</option>
              </select>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-5">
              <label htmlFor="start-date" className="font-semibold">
                Start Date:
              </label>
              <input
                type="date"
                id="start-date"
                name="start-date"
                defaultValue={today}
                readOnly
                className="rounded w-2/3 py-1 focus:border-gray-500  bg-gray-200 focus:bg-white"
              />
            </div>
            <div className="flex flex-wrap justify-between items-center gap-5">
              <label htmlFor="end-date" className="font-semibold">
                End Date:
              </label>
              <input
                type="date"
                id="end-date"
                name="end-date"
                className="rounded w-2/3 py-1 focus:border-gray-500  bg-gray-200 focus:bg-white"
              />
            </div>
            <button className="py-2 px-3 font-medium bg-primary text-white relative overflow-hidden group z-10 duration-300 hover:bg-primary/95 rounded-sm active:scale-75 ">
              Add Task
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddNewTask;

AddNewTask.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

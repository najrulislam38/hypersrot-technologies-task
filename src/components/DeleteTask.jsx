import { useDispatch } from "react-redux";
import Modal from "./ui/Modal";
import PropTypes from "prop-types";
import { deleteTask } from "../redux/features/tasks/tasksSlice";

const DeleteTask = ({ isOpen, setIsOpen, task }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    if (task?.status !== "completed") {
      dispatch(deleteTask(id));
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} headTitle={"Delete Task"}>
        <div className="px-6 py-4">
          <p>Do you wish to delete this task</p>
          <div className="flex items-center justify-between  my-5">
            <h3 className="font-medium text-lg">{task?.title}</h3>
            <div>
              <button
                onClick={() => handleDeleteTask(task?.id)}
                className="px-3 py-1 mr-3 font-medium text-sm bg-primary text-white relative overflow-hidden group z-10 duration-300 hover:bg-primary/95 rounded-sm active:scale-90"
              >
                Delete
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-3 py-1 font-medium text-sm bg-primary text-white relative overflow-hidden group z-10 duration-300 hover:bg-primary/95 rounded-sm active:scale-90"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

DeleteTask.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  task: PropTypes.object,
};

export default DeleteTask;

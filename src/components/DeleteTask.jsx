import Modal from "./ui/Modal";
import PropTypes from "prop-types";

const DeleteTask = ({ isOpen, setIsOpen, title }) => {
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} headTitle={"Delete Task"}>
        <div className="px-6 py-4">
          <p>Do you wish to delete this task</p>
          <div className="flex items-center justify-between  my-5">
            <h3 className="font-medium text-lg">{title}</h3>
            <div>
              <button className="px-3 py-1 mr-3 font-medium text-sm bg-primary text-white relative overflow-hidden group z-10 duration-300 hover:bg-primary/95 rounded-sm active:scale-90">
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
  title: PropTypes.string,
};

export default DeleteTask;

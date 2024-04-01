import { useForm } from "react-hook-form";
import Modal from "./ui/Modal";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux/features/tasks/tasksSlice";

const UpdateTask = ({ isOpen, setIsOpen, task }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (task?.status !== "completed") {
      const updatedData = { ...data, id: task.id };
      dispatch(updateTask(updatedData));
      setIsOpen(!isOpen);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} headTitle={"Create A Task"}>
        <div className="px-8 py-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* title field */}
            <div className="">
              <label htmlFor="title" className="font-semibold block mb-1">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={task?.title}
                {...register("title", {
                  required: true,
                  formState: { errors },
                  maxLength: 20,
                })}
                className="rounded w-full py-1 focus:border-gray-500  bg-gray-200 focus:bg-white"
              />
            </div>
            {errors.title && (
              <p className="text-sm text-red-500 ">
                Title field is required amd most have less or equal 20 letters.
              </p>
            )}
            {/* description field */}
            <div className="pt-3">
              <label htmlFor="description" className="font-semibold block mb-1">
                Description:
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                defaultValue={task?.description}
                {...register("description", {
                  required: true,
                })}
                className="rounded w-full focus:border-gray-500  bg-gray-200 focus:bg-white"
                rows="2"
              ></textarea>
            </div>
            {errors.description && (
              <p className="text-sm text-red-500">This field is required.</p>
            )}
            {/* team field */}
            <div className="pt-3">
              <label htmlFor="team" className="font-semibold block mb-1">
                Team:
              </label>
              <input
                type="text"
                id="team"
                name="team"
                defaultValue={task?.team}
                {...register("team", {
                  required: true,
                })}
                className="rounded w-full py-1 focus:border-gray-500  bg-gray-200 focus:bg-white"
              />
            </div>
            {errors.team && (
              <p className="text-sm text-red-500">This field is required.</p>
            )}
            {/* assignee field */}
            <div className="pt-3">
              <label htmlFor="assignee" className="font-semibold block mb-1">
                Assignee:
              </label>
              <input
                type="text"
                id="assignee"
                name="assignee"
                defaultValue={task?.assignee}
                {...register("assignee", {
                  required: true,
                })}
                className="rounded w-full py-1 focus:border-gray-500  bg-gray-200 focus:bg-white"
              />
            </div>
            {errors.assignee && (
              <p className="text-sm text-red-500">This field is required.</p>
            )}
            <div className="flex justify-between items-center gap-5 pt-3">
              {/* priority field */}
              <div className="">
                <label htmlFor="priority" className="font-semibold mr-1">
                  Priority:
                </label>
                <select
                  name="priority"
                  id="priority"
                  defaultValue={task?.priority}
                  {...register("priority", {
                    required: true,
                  })}
                  className="py-1 focus:border-gray-500 rounded bg-gray-200 focus:bg-white"
                >
                  <option value="p0">P0</option>
                  <option value="p1">P1</option>
                  <option value="p2">P2</option>
                </select>
              </div>
              {errors.priority && (
                <p className="text-sm text-red-500">This field is required.</p>
              )}
              {/* status field */}
              <div className="">
                <label htmlFor="status" className="font-semibold mr-1">
                  Status:
                </label>
                <select
                  name="status"
                  id="status"
                  defaultValue={task?.status}
                  {...register("status", {
                    required: true,
                  })}
                  className="w-fit py-1 focus:border-gray-500 rounded bg-gray-200 focus:bg-white"
                >
                  <option value="pending">Pending</option>
                  <option value="inProgress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="deploy">Deploy</option>
                  <option value="deferred">Deferred</option>
                </select>
              </div>
              {errors.status && (
                <p className="text-sm text-red-500">This field is required.</p>
              )}
            </div>
            {task?.status === "completed" && (
              <p className="text-red-500">
                Completed Task not will be updated.
              </p>
            )}
            <button
              type="submit"
              className="py-2 px-3 font-medium bg-primary text-white relative overflow-hidden group z-10 duration-300 hover:bg-primary/95 rounded-sm active:scale-75 "
            >
              Add Task
            </button>
            <span
              onClick={() => setIsOpen(!isOpen)}
              className="py-3 px-4 font-medium bg-primary text-white relative overflow-hidden group z-10 duration-300 hover:bg-primary/95 rounded-sm active:scale-75 ml-4 "
            >
              Cancel
            </span>
          </form>
        </div>
      </Modal>
    </div>
  );
};

UpdateTask.propTypes = {
  task: PropTypes.object,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default UpdateTask;

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import DeleteTask from "../DeleteTask";

export default function EditModal({ isModalOpen, setModalOpen, title }) {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setModalOpen(false);
  }

  const handleDelete = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      setModalOpen(false);
    }
  };

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  max-w-56 transform overflow-hidden bg-gradient-to-r from-[#F4DBF9] to-[#DBDBFF] rounded-sm  text-left align-middle shadow-xl transition-all">
                  <div className={`rounded-lg text-lg}`}>
                    <button className="w-full py-1 font-medium bg-gray-500 text-white relative overflow-hidden group z-10 duration-300 hover:bg-primary/95 active:scale-75">
                      Edit Task
                    </button>
                    <hr className="bg-black" />
                    <button
                      // onClick={() => setIsOpen(!isOpen)}
                      onClick={() => handleDelete()}
                      className="w-full py-1 font-medium bg-gray-500 text-white relative overflow-hidden group z-10 duration-300 hover:bg-primary/95 active:scale-75"
                    >
                      Delete Task
                    </button>
                    <DeleteTask isOpen={isOpen} setIsOpen={setIsOpen} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

EditModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
};

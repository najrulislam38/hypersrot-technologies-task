import { useState } from "react";
import Container from "./Container";
import Tasks from "./Tasks";
import AddNewTask from "./AddNewTask";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="mx-5 md:mx-10">
      {/* main container */}
      <Container>
        <div className=" w-full min-h-[500px] mb-10 p-5 md:p-6 border-2 border-white rounded-lg">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-5  ">
            {/* Filter section */}
            <div className="md:col-span-3 lg:col-span-4">
              <form className="flex items-center space-x-3 gap-3 flex-wrap">
                <h3 className="font-semibold">Filter By: </h3>
                <input
                  className="rounded-lg border border-gray-500 px-2 py-1 text-gray-600 ring-offset duration-300 focus:outline-none focus:ring"
                  type="text"
                  placeholder="Assignee Name"
                />
                <select className="min-w-24 rounded-lg border border-gray-500 px-2 py-1 text-gray-600 ring-offset duration-300 focus:outline-none focus:ring">
                  <option value="">Priority</option>
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </select>
                <input
                  className="rounded-lg border border-gray-500 px-2 py-1 text-gray-600 ring-offset duration-300 focus:outline-none focus:ring"
                  type="date"
                />
              </form>
              <div className="py-5">
                <h3 className="font-semibold inline mr-3">Sort By: </h3>
                <select className="rounded-lg min-w-24 border border-gray-500 px-2 py-1 text-gray-600 ring-offset duration-300 focus:outline-none focus:ring">
                  <option value="">Priority</option>
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </select>
              </div>
            </div>
            {/* add Task section */}
            <div className="col-span-1">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-1 font-medium bg-primary text-white relative overflow-hidden group z-10 duration-300 hover:bg-primary/95 rounded-sm active:scale-90"
              >
                Add New Task
              </button>
              <AddNewTask isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
          {/* tasks section */}
          <Tasks />
        </div>
      </Container>
    </section>
  );
};

export default Home;

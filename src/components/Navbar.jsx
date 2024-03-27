import Container from "./Container";
import { UserIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="mx-5 md:mx-10">
      <Container>
        <div className=" w-full flex justify-between items-center p-5">
          <h1 className="text-xl md:text-2xl font-bold">Task Board</h1>
          <div className="text-black bg-white rounded-full p-2">
            <UserIcon class="h-6 w-6 " />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

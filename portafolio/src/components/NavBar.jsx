import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";

function NavList() {
  return (
    <ul className="my-2 flex flex-col lg:mb-0 lg:flex-row lg:items-center lg:gap-6 items-center text-center">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <ScrollLink
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white flex items-center hover:text-blue-500 transition-colors border-b-2 border-white hover:border-blue-500 duration-300 ease-in-out mx-4 hover:cursor-pointer"
        >
          About me
        </ScrollLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <ScrollLink
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white flex items-center hover:text-blue-500 transition-colors border-b-2 border-white hover:border-blue-500 duration-300 ease-in-out mx-4 hover:cursor-pointer"
        >
          Skills
        </ScrollLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white flex items-center hover:text-blue-500 transition-colors border-b-2 border-white hover:border-blue-500 duration-300 ease-in-out mx-4 hover:cursor-pointer"
        >
          Projects
        </ScrollLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white flex items-center hover:text-blue-500 transition-colors border-b-2 border-white hover:border-blue-500 duration-300 ease-in-out mx-4 hover:cursor-pointer"
        >
          Contact
        </ScrollLink>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      id="navbar"
      className=" bg-blue-gray-300 rounded-3xl my-4 max-w-xl mx-auto fixed top-0 left-0 right-0 z-40 py-1.5"
    >
      <div className="flex items-center justify-center text-blue-gray-900">
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

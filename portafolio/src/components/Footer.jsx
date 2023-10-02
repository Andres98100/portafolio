import { Typography } from "@material-tailwind/react";
import { Link as ScrollLink } from "react-scroll";

export function SimpleFooter() {
  return (
    <footer className="flex w-full flex-col items-center justify-center py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal text-white">
        &copy; 2023 Jaime Andres Rodriguez
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500 hover:cursor-pointer"
        >
          <ScrollLink
            to="aboutMe"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About me
          </ScrollLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500 hover:cursor-pointer"
        >
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </ScrollLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500 hover:cursor-pointer"
        >
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </ScrollLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500 hover:cursor-pointer"
        >
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </ScrollLink>
        </Typography>
      </ul>
    </footer>
  );
}
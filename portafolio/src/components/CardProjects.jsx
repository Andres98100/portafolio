import { Carousel, Button } from "@material-tailwind/react";

export default function MyCarousel() {
    return (
        <Carousel id="projects" className="rounded-xl max-w-7xl m-auto">
            <div className="pb-28 text-white p-4 text-center object-cover">
                <img
                    src="https://www.aydentownsley.com/img/hbnb.png"
                    alt="logo airbnbHolberton"
                    className="m-auto rounded-full mb-9"
                    width={200}
                />
                <p className="max-w-lg m-auto text-sm sm:text-base text-gray-400 sm:max-w-sm pb-8">
                    Project where a clone of the well-known web application AirBnB was developed. For the project,
                    Python, Flask, MySQL, and GitHub were used. I participated in the database structure and
                    project implementation. The project was implemented to be highly scalable, using an ORM
                    (Object-Relational Mapping).
                </p>
                <a href="https://github.com/Andres98100/holbertonschool-AirBnB_clone_v4" target='_blank'>
                    <Button className="bg-indigo-600">
                        <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="octicon octicon-mark-github">
                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                        </svg>
                    </Button>
                </a>
            </div>
            <div className="pb-28 text-white p-4 text-center object-cover">
                <img
                    src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/79001/1826_54533.jpg"
                    alt="logo Coderise"
                    className="m-auto rounded-full mb-9"
                    width={200}
                />
                <p className="max-w-lg m-auto pb-8 text-sm sm:text-base text-gray-400 sm:max-w-sm">
                    I was part of a professional team for the development of a web application required by coderise,
                    my role was on the BackEnd where I collaborated on the implementation and design of the
                    database and CRUD methods, the function of the web application is to facilitate the recruitment
                    of software developers for companies..
                </p>
                <a href="https://github.com/Andres98100/recruitment-system" target='_blank'>
                    <Button className="bg-indigo-600">
                        <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="octicon octicon-mark-github">
                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                        </svg>
                    </Button>
                </a>
            </div>
        </Carousel>
    );
}

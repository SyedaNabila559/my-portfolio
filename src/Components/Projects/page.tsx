import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      className="relative bg-[url('/images/bg.png')] w-full bg-cover"
      id="Projects"
    >
      <div className="absolute bg-black-1 opacity-85 inset-0"></div>
      <div className="relative py-20 max-sm:px-0 max-lg:py-10 mx-auto">
        <div className="text-center text-color-01 text-5xl font-bold max-sm:text-4xl">
          My Projects
        </div>
        <div className="justify-center flex py-20">
          <div className="grid grid-cols-3 gap-24 max-2xl:grid-cols-2 max-xl:gap-20 max-lg:grid-cols-1">
            <div className="border-4 border-l-cyan-400 border-r-sky-600 border-t-green-700 border-b-teal-700 w-96 rounded-3xl hover:scale-110 duration-300 max-lg:w-3/5 max-lg:mx-auto max-sm:w-full max-sm:border-l-0 max-sm:border-r-0 max-sm:rounded-none max-lg:p-3">
              <Image
                src="/images/resume.jpeg"
                width="2500"
                height="2500"
                alt="My Project"
                className="object-cover opacity-90 rounded-t-3xl"
              />
              <div className="text-center font-bold text-2xl py-4 text-white drop-shadow-lg">
                Resume Builder
              </div>
              <div className="text-center text-sm text-black drop-shadow-lg px-5 max-sm:px-1">
                <span className="font-bold text-lg">Description:</span>
                <br /> 
                The Resume Generator is an intuitive web application that
                streamlines the process of creating professional resumes. Users
                can easily input their personal details, education, work
                experience, and skills through a user-friendly interface. The
                application dynamically generates a polished resume that can be
                downloaded in PDF format, offering a hassle-free solution for
                job seekers. This project highlights my skills in form handling,
                data manipulation, and output generation while delivering a
                clean and efficient user experience.
              </div>
              <div className="py-8 text-center ">
                <Link
                  href="https://github.com/SyedaNabila559/milestone.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-color-01 text-lg border-2 rounded-3xl px-8 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
                >
                  Visit Site
                </Link>
              </div>
            </div>

            <div className="border-4 border-l-cyan-400 border-r-sky-600 border-t-green-700 border-b-teal-700 w-96 rounded-3xl hover:scale-110 duration-300 max-lg:w-3/5 max-lg:mx-auto max-sm:w-full max-sm:border-l-0 max-sm:border-t-0 max-sm:border-r-0 max-sm:rounded-none max-lg:p-3">
              <Image
                src="/images/website.webp"
                width="2500"
                height="2500"
                alt="My Project"
                className="object-cover opacity-90 rounded-t-3xl"
              />
              <div className="text-center font-bold text-2xl py-4 text-white drop-shadow-lg">
              My First Website (GIAIC OFFICAL)
              </div>
              <div className="text-center text-sm text-black drop-shadow-lg px-5 max-sm:px-1">
                <span className="font-bold text-lg">Description:</span>
                <br />
                My first website was a simple project that showcased my interests and skills. I wanted to create a space where I could share my thoughts, hobbies, and any creative work I had done. I focused on a clean design, easy navigation, and engaging content, making sure to include sections like a blog, a gallery, and links to my social media. Building it was a rewarding experience, allowing me to learn about web development while expressing myself online.
                
              </div>
              <div className="py-8 text-center ">
                <Link
                  href="https://github.com/SyedaNabila559/my-first-website.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-color-01 text-lg border-2 rounded-3xl px-8 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
                >
                  Visit Site
                </Link>
              </div>
            </div>

            <div className="border-4 border-l-cyan-400 border-r-sky-600 border-t-green-700 border-b-teal-700 w-96 rounded-3xl hover:scale-110 duration-300 max-lg:w-3/5 max-lg:mx-auto max-sm:w-full max-sm:border-l-0 max-sm:border-r-0 max-sm:border-t-0 max-sm:border-b-0 max-sm:rounded-none max-lg:p-3">
              <Image
                src="/images/45.jpg"
                width="2500"
                height="2500"
                alt="My Project"
                className="object-cover opacity-90 rounded-t-3xl"
              />
              <div className="text-center font-bold text-2xl py-4 text-white drop-shadow-lg">
               Typescript question (45)
              </div>
              <div className="text-center text-sm text-black drop-shadow-lg px-5 max-sm:px-1">
                <span className="font-bold text-lg">Description:</span>
                <br />
                 This is cli question base assigment.
              </div>
              <div className="py-8 text-center ">
                <Link
                  href="https://github.com/SyedaNabila559/45-assigment-question.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-color-01 text-lg border-2 rounded-3xl px-8 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
                >
                  Visit Site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
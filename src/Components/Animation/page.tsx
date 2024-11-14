"use client";

import Link from "next/link";
import { ReactTyped } from "react-typed";


export default function TypingAnimation() {
  return (
    <div className="py-8 text-color-01">
      <h1 className="text-3xl px-2 font-bold sm:text-xl lg:text-2xl">Hello !!</h1>
      <h1 className="text-5xl pb-5 font-bold sm:text-3xl lg:text-4xl">
        I am <span className="text-red-500">Nabila Bannay Khan</span>
      </h1>
      <span className="text-4xl font-bold sm:text-2xl lg:text-3xl">I am a Passionate </span>
      <br />
      <ReactTyped
        strings={["Front-End Developer.", "Web Developer.", "UI/UX Designer."]}
        className="text-orange-500 text-5xl font-bold sm:text-3xl lg:text-4xl"
        typeSpeed={50}
        backSpeed={30}
        loop
      />
      <h1 className="text-white text-2xl w-3/4 py-5 font-sans sm:text-lg sm:w-full lg:w-full">
        I am passionate about coding and technology. I started my journey into programming through the Governor Sindh Initiative for GenAI, Web3, and the Metaverse, a few months ago, and have since developed skills in languages such as HTML, CSS, TypeScript, and JavaScript. I am currently learning Next.js. I love the challenge of problem-solving and enjoy creating applications that can make everyday tasks easier.
      </h1>
      <div className="py-8">
        <Link
          href="/#Contact Us"
          className="text-color-01 text-lg border-2 rounded-3xl px-8 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

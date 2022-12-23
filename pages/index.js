import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import matt from "/public/IMG_3109.JPG";
import pokemonProject from "/public/Screenshot 2022-12-21 at 5.30.35 PM.png";
import img1 from "/public/Screenshot 2022-12-21 at 5.32.07 PM.png";
import img2 from "/public/Screenshot 2022-12-21 at 5.32.33 PM.png";
import img3 from "/public/Screenshot 2022-12-21 at 5.32.46 PM.png";
import {
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiReact,
  DiPostgresql,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import { useState } from "react";
import mLogo from "/public/MM logo.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Matt Moon Portfolio</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/MM logo.ico" />
      </Head>
      <main className="bg-gray-200 px-10 min-h-screen dark:bg-gray-900">
        <section className="">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">Matt Moon</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-blue-500 to-blue-900 text-white px-4 py-2 rounded-md ml-8"
                  href="Matt_Moon_Resume.pdf"
                  download="Matt_Moon_Resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-blue-900 font-medium dark:text-white">
              Matt Moon
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Former BDR who moved into software development. Graduated from
              Devmountain in 2022 with a specialization in web development.
            </p>
          </div>

          <div className="relative mx-auto rounded-full w-80 h-80 overflow-hidden">
            <Image
              src={matt}
              className="rounded-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        {/* About */}
        <section>
          <div className="">
            <h3 className="text-3xl py-5 flex justify-center dark:text-white">
              About Me
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 flex justify-center p-40 text-center dark:text-white">
              I got started in sales, but after a few years, I found that while
              I was very successful, the work wasn't fulfilling for me in my
              life. I attended Devmountain in 2022 and quickly learned that I
              loved programming. Along with being a developer, I am a dad, a
              linguist and a sports nerd. I love BYU football and the Utah Jazz,
              and will go golfing with you any time you ask.
            </p>
          </div>
          <div>
            <p className="text-3xl pt-9 flex justify-center dark:text-white">
              Skills
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 flex justify-center p-40 text-center dark:text-white">
              My Devmountain course emphasis was on web development. During the
              8 months of my program, I gained skills with RESTful API methods,
              backend development, frontend development, database design and
              building, as well as in the following technologies/languages.
            </p>
            <div className="text-8xl flex justify-center gap-16 py-3 pt-8">
              <DiReact className=" text-blue-300" />
              <DiJsBadge className="text-yellow-400" />
              <DiCss3 className="text-blue-500" />
              <DiHtml5 className=" text-orange-500" />
              <DiPostgresql className=" text-purple-900" />
              <DiNodejs className=" text-green-600" />
            </div>
          </div>
        </section>
        {/* projects */}
        <div>
          <h3 className="text-3xl py-5 flex justify-center dark:text-white">
            Projects
          </h3>
          <h4 className="text-xl py-5 flex justify-center dark:text-white">
            Pokemon Team Builder
          </h4>
          <p className="text-md py-2 leading-8 text-gray-800 flex justify-center p-40 text-center dark:text-white">
            Created a CRUD app that connects to the PokeAPI and allows users to
            search for pokemon, add them to their team, then remove them if they
            want to switch out for a different member. Technologies used were
            HTML, CSS and Node.js.{" "}
          </p>
          <div className=" flex justify-center">
            <Image src={pokemonProject} width={1000} height={400} />
          </div>
          <h4 className="text-xl pt-6 flex justify-center dark:text-white">
            Restaurant Website
          </h4>
          <p className="text-md py-2 leading-8 text-gray-800 flex justify-center p-40 text-center dark:text-white">
            Created a website for a fictional restuarant known as Matt's Bistro.
            This was my final project for Devmountain. The website is both a
            landing page for customers and a app for the employees who work at
            the restaurant. The idea behind the app was for employees to be able
            to log in, add items to an order and invoice it out to the customer.
            The technologies I used for this project were React, Node.js, HTML,
            CSS and PostgreSQL.{" "}
          </p>
          <div className=" flex justify-center py-4 ">
            <Image src={img1} width={1000} height={400} />
          </div>
          <div className=" flex justify-center py-4 ">
            <Image src={img2} width={1000} height={400} />
          </div>
          <div className=" flex justify-center py-4 ">
            <Image src={img3} width={1000} height={400} />
          </div>
        </div>
        <div className="text-5xl flex justify-center gap-16 text-gray-600 pt-12 pb-8 dark:text-white">
          <a href="https://github.com/mattmoon00" target="_blank">
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/matt-moon-656aa5183/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </main>
    </div>
  );
}

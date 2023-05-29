// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useLocation } from 'react-router-dom';




export default function Navbar({ linkpage }) {

  const [page, setPage] = React.useState("");

  // const { query } = useRouter();

  // // 👇 Get source from query params
  // const { id, source } = query;
  // const pathname = useLocation();
  // console.log(pathname);


  const button_style_non_active = "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  const button_style_active = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";

  return (
    <nav class="bg-transparent border-gray-200 dark:bg-transparent">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" class="flex items-center">
          <div className="flex">
            <img src="/images/logo.png" class="bg-transparent invert bg-opacity-100   h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Lukas Scheucher</span>
          </div>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link href="/"
                class={page === "home" ? button_style_active : button_style_non_active} onC={() => setPage("home")}>Home</Link>
            </li>
            <li>
              <Link href="/posts"
                class={page === "posts" ? button_style_active : button_style_non_active} onClick={() => setPage("posts")}>Posts</Link>
            </li>
            {/* <li>
              <a href="/skills"
                class={page === "skills" ? button_style_active : button_style_non_active} onClick={() => setPage("skills")}>Skills</a>
            </li> */}
            <li>
              <Link href="https://scheuclu.github.io/hugo_cv"
                class={page === "cv" ? button_style_active : button_style_non_active} onClick={() => setPage("cv")}>CV</Link>
            </li>
            <li>
              <Link href="/contact"
                class={page === "contact" ? button_style_active : button_style_non_active} onClick={() => setPage("contact")}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

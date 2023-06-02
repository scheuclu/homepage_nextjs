
import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export default function SourceDeployButtons(frontMatter) {


    return (<div className="grid md:grid-cols-2 gap-4 mt-2 content-center items-center" >
        {
            frontMatter.source &&
            <Link href={`${frontMatter.source}`}>
                <a className="flex items-center rounded-lg bg-white dark:bg-black dark:bg-opacity-30 
bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border 
border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t 
first:border-t last:border-b py-2 px-4">
                    <p className="uppercase text-gray-500 dark:text-white dark:opacity-60">
                        <FaGithub className="mr-2" />
                    </p>
                    <h4 className="text-1xl text-gray-700 dark:text-white">
                        Source code
                    </h4>
                </a></Link>
        }
        {
            frontMatter.deployed &&
            <Link href={`${frontMatter.deployed}`}>
                <a className="flex items-center rounded-lg bg-white dark:bg-black dark:bg-opacity-30 
bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border 
border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t 
first:border-t last:border-b py-2 px-4">
                    <p className="uppercase text-gray-500 dark:text-white dark:opacity-60">
                        <FaLink className="mr-2" />
                    </p>
                    <h4 className="text-1xl text-gray-700 dark:text-white">
                        Deployed app
                    </h4>
                </a></Link>
        }
    </div >);
}









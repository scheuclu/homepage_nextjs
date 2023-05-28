import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  postFilePaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import { Table } from '@nextui-org/react'
import React from 'react';
import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, })

import { BlockMath, InlineMath } from 'react-katex';
import YouTube, { YouTubeProps } from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import ImageGallery from 'react-image-gallery';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
  Table,
  React,
  Plot,
  BlockMath,
  InlineMath,
  YouTube,
  ImageGallery
};


export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
}) {
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <Header name={globalData.name} />
      <article className="px-6 max-w-[100%] mx-auto">
        <header>
          <h1 className="text-2xl md:text-4xl dark:text-white text-center mb-8">
            {frontMatter.title}
          </h1>
          {frontMatter.description && (
            <p className="text-xl mb-4">{frontMatter.description}</p>
          )}
          </header>


<div className="grid md:grid-cols-2 gap-4 mt-2 mb-8 content-center items-center">
        {frontMatter.source && 
        <Link href={`${frontMatter.source}`}>
        <a className="flex items-center rounded-lg bg-white dark:bg-black dark:bg-opacity-30 
        bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border 
        border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t 
        first:border-t last:border-b py-2 px-4">
          <p className="uppercase text-gray-500 dark:text-white dark:opacity-60">
            <FaGithub className="mr-2"/>
          </p>
          <h4 className="text-1xl text-gray-700 dark:text-white">
            Source code
          </h4>
        </a></Link>
        }
        {frontMatter.deployed && 
        <Link href={`${frontMatter.deployed}`}>
        <a className="flex items-center rounded-lg bg-white dark:bg-black dark:bg-opacity-30 
        bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border 
        border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t 
        first:border-t last:border-b py-2 px-4">
          <p className="uppercase text-gray-500 dark:text-white dark:opacity-60">
            <FaLink className="mr-2"/>
          </p>
          <h4 className="text-1xl text-gray-700 dark:text-white">
            Deployed app
          </h4>
        </a></Link>
        }
      </div>



        
        <main>
          <article className="prose dark:prose-dark">
            <MDXRemote {...source} components={components} />
          </article>
        </main>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {prevPost && (
            <Link href={`/posts/${prevPost.slug}`}>
              <a className="py-6 px-8 text-center first:rounded-t-lg last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-t">
                <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">
                  Previous
                </p>
                <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                  {prevPost.title}
                </h4>
                <ArrowIcon className="transform rotate-180 mx-auto mt-auto" />
              </a>
            </Link>
          )}
          {nextPost && (
            <Link href={`/posts/${nextPost.slug}`}>
              <a className="py-6 px-8 text-center first:rounded-l-lg last:rounded-r-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t first:border-t last:border-b">
                <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">
                  Next
                </p>
                <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                  {nextPost.title}
                </h4>
                <ArrowIcon className="mt-auto mx-auto" />
              </a>
            </Link>
          )}
        </div>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

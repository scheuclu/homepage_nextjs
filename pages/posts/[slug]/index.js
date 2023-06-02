import { getGlobalData } from '@/utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  postFilePaths,
} from '@/utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '@/components/ArrowIcon';
import CustomLink from '@/components/CustomLink';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Layout, { GradientBackground } from '@/components/Layout';
import SEO from '@/components/SEO';
import { Table } from '@nextui-org/react'
import React from 'react';
import PlotlyPlot from '@/components/PlotlyPlot';

import { BlockMath, InlineMath } from 'react-katex';
import YouTube, { YouTubeProps } from 'react-youtube';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import ImageGallery from 'react-image-gallery';

import SourceDeployButtons from '@/components/SourceDeployButtons'

import ContactForm from '@/components/ContactForm'
// import MarkdownRender from '@/components/MardkownRender';
import 'katex/dist/katex.min.css' //important
// import Latex from 'react-latex-next'

// import dynamic from "next/dynamic";
// const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, })

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
  BlockMath,
  InlineMath,
  YouTube,
  ImageGallery,
  PlotlyPlot,
  // MarkdownRender,
  // Latex
};


export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
}) {
  // return <ContactForm />;
  console.log(frontMatter.image);
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <meta property="og:image" content={frontMatter.image} />
      {/* <Header name={globalData.name} /> */}





      {/* <header className="w-full bg-[url('/images/post_banners/style_transfer.jpg')]  h-80
      bg-cover	bg-center saturate-100 brightness-100 border-t-4 border-b-4 border-black dark:border-white flex flex-col items-center pt-8 ">

        <p className='text-5xl'>Solidity Star Notary Dapp</p>
        <p className='text-xl'>A DApp built on Ethereum using truffle, hosted on the Goerli test chain. I implemented an ERC721 token in Solidity representing Star name ownership. Anyone can connect, mint and trade stars</p>
      </header> */}



      <article className="mt-10 px-6 max-w-[100%] mx-auto">
        <header className='mb-4'>
          {/* <header className="bg-[url('/images/post_banners/stars.jpg')] bg-cover	bg-center rounded-lg saturate-100 brightness-100 p-4 pt-6 mb-4 image-blurred-edge image-blurred-edge"> */}
          <h1 className="text-2xl md:text-4xl dark:text-white text-center text-semibold mb-8">
            {frontMatter.title}
          </h1>
          {/* <img src="/images/post_banners/style_transfer.jpg" className="h-24 w-full rounded-lg saturate-100 shadow-lg shadow-white mb-4 text-blue-200" alt="style transfer" /> */}
          {frontMatter.description && (
            <p className="text-xl mb-4">{frontMatter.description}</p>
          )}
          <SourceDeployButtons source={frontMatter.source} deployed={frontMatter.deployed} />

          {/* <img className="w-full h-80 rounded-lg mb-4 text-blue-200 border border-[#000000] dark:border-[#ffffff]" src={frontMatter.image} alt="Picture of the author" /> */}
          {/* {frontMatter.image && <div className={"bg-[url('" + frontMatter.image + "')] h-80 w-32 w-full bg-cover	rounded-lg p-4  mt-8 mb-4 text-blue-200 border border-[#000000] dark:border-[#ffffff]"} />
          } */}
        </header>
        {/* <div className="bg-[url('/images/post_banners/style_transfer.jpg')] h-32 bg-cover	rounded-lg saturate-50 p-4 shadow-lg shadow-white mb-4 text-blue-200" /> */}





        {/* <div className="bg-[url('/images/post_banners/style_transfer.jpg')] h-32 w-full bg-cover	rounded-lg p-4 shadow-lg shadow-white mb-4 text-blue-200" /> */}





        <main>
          <article className="prose dark:prose-dark">
            <MDXRemote {...source} components={components} />
          </article>
        </main>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
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

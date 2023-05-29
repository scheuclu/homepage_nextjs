import Link from 'next/link';
import { getPosts } from '@/utils/mdx-utils';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Layout, { GradientBackground } from '@/components/Layout';
import ArrowIcon from '@/components/ArrowIcon';
import { getGlobalData } from '@/utils/global-data';
import SEO from '@/components/SEO';
import Pagination from '@mui/material/Pagination';

import Image from 'next/image';

import React from 'react';


export default function Index({ posts, globalData }) {


  const [subPosts, setSubPosts] = React.useState(posts.length > 4 ? posts.slice(0, 4) : posts);
  const [page, setPage] = React.useState(1);

  console.log(`Got ${posts.length} posts`);
  console.log(`Got ${Math.ceil(posts.length / 4)} pages`);

  const NUMPAGES = Math.ceil(posts.length / 4);


  React.useEffect(() => {
    console.log(`Page set to ${page}`);
    const start = (page - 1) * 4;
    const end = start + 4 > posts.length ? posts.length : start + 4;
    setSubPosts(posts.slice(start, end));
  }, [page, posts]);




  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <main className="container mx-auto justify-center">

        <p className='text-3xl mb-6 mt-12 font-extrabold'> Posts</p>
        <ul>
          <div className="flex justify-center text-3xl">
            <Pagination color="secondary" className="justify-center w-max mb-2 text-3xl dark:invert	" count={NUMPAGES}
              onChange={(event, value) => setPage(value)}

            />
          </div>
          {subPosts.map((post) => (
            <li
              key={post.filePath}
              className="bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border
              border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0 p-4 md:p-6"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="block focus:outline-none focus:ring-4 px-4 md:px-6 py-4 lg:py-6">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}

        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>

  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}

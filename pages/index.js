import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

import Image from 'next/image';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="container mx-auto">
        <h1 className="text-3xl lg:text-4xl text-center mb-8">
          {globalData.blogTitle}
        </h1>
        <p className="text-center mb-8">
          Hi, I am an Austrian software developer who turned from Big Tech to freelancing during the COVID pandemic. 

          I have an education from Technical University of Munich as well as Stanford University. However, I consider myself a lifelong learner, so I have plenty or other certifications.

          My favourite language is Python❤️, but I am also fluent in C, C++ and Go.

          Fields that excite me are Machine Learning, Data Visualization and Blockchain Technology. I believe technology is about empowering people, so I value anything that brings accessibility to the masses and removes centralization.

          Other than that, I am passionate about nature, fiction and Formula 1 (🇳🇱)!

          Please check out my CV and portfolio.

          If you think I could help you with your project, please dont hestitate to reach out!
        </p>


        <hr></hr>

        <div class="grid grid-cols-4 gap-4 justify-center items-center align-center mb-4 mt-4">
          <img className='grayscale brightness-30 dark:brightness-0 saturate-0 dark:invert h-12 logo' src="/images/logos/google.svg" alt="" />
          <img className='grayscale brightness-30 dark:brightness-0 saturate-0 dark:invert h-12 logo' src="/images/logos/vw.png" alt=""/>
          <img className='grayscale brightness-30 dark:brightness-0 saturate-0 dark:invert h-12 logo' src="/images/logos/stanford.png" alt="" />
          <img className='grayscale brightness-30 dark:brightness-0 saturate-0 dark:invert h-12 logo' src="/images/logos/tum.png" alt=""  />
        </div>
        
        {/* <div className="grid grid-cols-4 gap-4">
          <div>
            <Image  src="/../static/images/logos/google.svg" alt="" layout='fill'/>
          </div>
          <div className="w-1/4 h-auto">
            <Image  src="/../static/images/logos/google.svg" alt="" layout='fill'/>
          </div>
          <div className="w-1/4 h-auto">
            <Image  src="/../static/images/logos/google.svg" alt="" layout='fill'/>
          </div>
          <div className="w-1/4 h-auto">
            <Image  src="/../static/images/logos/google.svg" alt="" layout='fill'/>
          </div>
        </div> */}

        {/* <p>
        <img src="../../static/images/logos/google.svg" alt="" height="50px" />
        <img src="/../static/images/logos/vw.png" alt="" height="50px" />
        <img src="/../static/images/logos/stanford.png" alt="" height="55px" />
        <img src="/../static/images/logos/tum.png" alt="" height="50px" />
        </p> */}

        <hr></hr>
        <p className='text-3xl mb-6 mt-12 font-extrabold'> Recent Posts</p>
        <ul>
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0 p-4 md:p-6"
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

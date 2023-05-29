import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

import Image from 'next/image';

export default function Index({ posts, globalData }) {
    return (
        <Layout>
            <main className="container mx-auto text-center">
                <p className="mt-12 text-3xl font-extrabold mb-1">
                    Get in touch!
                </p>
                <p className="text-m text-center mb-8">
                    Please leave me a short message if you would like to get in touch. I will get back to you as soon as possible.
                </p>
                {/* <hr></hr> */}
                <ContactForm className="align-left justify-left text-left" />

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

import Head from 'next/head'
import FeaturedPosts from '../components/FeaturedPosts'
import Hero from '../components/hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Uday Kiran Damodara</title>
        <meta name='description' content='Welcome to my page!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <FeaturedPosts />
      {/* <img src='/images/website/hero-bg.jpg' width='600px' height='300px' /> */}
    </div>
  )
}

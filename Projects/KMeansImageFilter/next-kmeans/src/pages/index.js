import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div class={styles.wrapper}>
      <Head>
        <title>KMeans Image Filter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>KMeans Image Filter</h1>
      </header>
      <div className={styles.imageHolder}>
        
      </div>
      <div className={styles.optionsHolder}>
      <div className={styles.generalOptions}>
          <ul>
            <li>File</li>
            <li>Number of Clusters</li>
            <li>Number of Points to Sample</li>
          </ul>
        </div>
        <div className={styles.colorOptions}>

        </div>
      </div>
      <footer className={styles.footer}>
        <a href="#">github.com</a>
      </footer>
    </div>
  )
}

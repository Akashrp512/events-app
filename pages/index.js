import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'


export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img />
          <Link href='/'>Home</Link>
          <Link href='/events'>Events</Link>
          <Link href='/about'>About</Link>
        </nav>
      </header>
      <main className={styles.main}>
        {data.map((e) =>( 
          <Link key={e.id} href={`/events/${e.id}`}>
          <Image alt={e.title} width={200} height={200} src={e.image}/>
           <h2>{e.title}</h2>
           <p>{e.description}</p>
          </Link>
          ))}
      </main>

      <footer className={styles.footer}>
        <p>All license reserved @2023</p>
      </footer>
    </div>
  )
}


export async function getServerSideProps() {
  const {events_categories} = await import('/Data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}
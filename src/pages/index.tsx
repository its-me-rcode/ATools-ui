import type { NextPage } from 'next';
import Head from 'next/head';
import Main from '../components/Main';
import NavBar from '../components/NavBar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main />
    </div>
  );
};

export default Home;

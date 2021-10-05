import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Private from "../src/components/Private";

const Home: NextPage = () => {
  return (
    <Private>
      <div className={styles.container}>
        <h1>Solo para usuarios</h1>
      </div>
    </Private>
  );
};

export interface Props {
  children: any;
}

export default Home;

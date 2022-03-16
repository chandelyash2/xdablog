import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.containerBody}>
          <div
            className={styles.conatinerImg}
            style={{ backgroundImage: "url(/mountain.jpeg)" }}
          >
            <span>curious / adventurous</span>
          </div>

          <div className={styles.containerBodyContent}>
            <p>A travel blog for the curious + adventurous</p>
            <h4>ANYWHERE WE ROAM</h4>
            <div className={styles.mainContent}>
              <p>
                It’s a big wide world out there. A world of cultural charms and
                natural wonders; of mega-cities and remote outposts; of paths to
                cross and lessons to learn; of limitless kindness and harsh
                realities.
              </p>
              <p>
                We travel to enquire, to hear stories and to be awestruck by
                incredible scenery. To witness the ingenuity and defiance of
                individuals and the remarkable output of their cooperation. To
                be humbled by the history of yesterday, informed about the
                politics of today and excited by the possibilities of tomorrow.
              </p>
              <p>We travel to have fun.</p>
              <p>
                Anywhere We Roam is the story of our travels. The moments that
                moved us, the characters we encountered and the stage upon which
                it is all set.
              </p>
              <p>It is a big wide world out there, come see it with us.</p>
            </div>
          </div>
          <div className={styles.placeList}>
            sad
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;

import Head from "next/head";
import Heading1 from "../components/Heading1";
import ShowcaseItem from "../components/Showcase";
import { OL } from "../components/styles/showcase";
import { CONTAINER, HEADER, FOOTER, SECTION } from "../components/styles/page";

const Home = () => (
  <CONTAINER>
    <Head>
      <title>Absolute Orange</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <HEADER major="true">
        <Heading1>
          <a href="/">absolute orange</a>
        </Heading1>
      </HEADER>
      <SECTION>
        <OL>
          <ShowcaseItem />
        </OL>
      </SECTION>
    </main>
    <FOOTER>© 2009 Absolute Orange Ltd</FOOTER>
  </CONTAINER>
);

export default Home;

import { useReducer, createContext } from "react";
import reducer, { initialState } from "../state/reducer";
import Head from "next/head";
import { Siteheading } from "../components/styles/headings";
import ShowcaseItem from "../components/Showcase";
import { OL } from "../components/styles/showcase";
import {
  Container,
  Header,
  Footer,
  Section,
  Logocontainer,
} from "../components/styles/page";

const Context = createContext();

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Container>
        <Head>
          <title>Absolute Orange</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Header major="true">
            <Logocontainer>
              <img src="images/logo.png" alt="absolute orange" />
            </Logocontainer>
            <Siteheading as="h1">
              <a href="/">absolute orange</a>
            </Siteheading>
          </Header>
          <Section>
            <OL>
              <ShowcaseItem />
            </OL>
          </Section>
        </main>
        <Footer>© 2009 Absolute Orange Ltd</Footer>
      </Container>
    </Context.Provider>
  );
};

export default Home;

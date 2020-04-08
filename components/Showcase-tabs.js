import useTabs from "../hooks/useTabs";
import { LI, HEADER, LEFT, RIGHT, MAIN, TITLE } from "./styles/showcase";
import { Tabs, Tab, Nav, Menuli, Tabcontainer } from "./styles/tabs";

const ShowcaseItem = () => {
  const { tabs, selectTab } = useTabs(6);
  return (
    <>
      <LI>
        <HEADER>
          <TITLE>
            <h2>
              <strong>Deliverable: </strong>Global e-commerce consumer website
            </h2>
          </TITLE>

          <LEFT>
            <div className="logo">
              <img src="images/showcaseLogos/dulux-new.jpg" alt="dulux" />
            </div>
          </LEFT>
          <RIGHT>
            <ul>
              <li>
                <a href="https://www.dulux.co.uk" target="_blank">
                  https://www.dulux.co.uk
                </a>
              </li>
              <li>
                <a href="https://www.dulux.com/fr" target="_blank">
                  https://www.duluxvalentine.com
                </a>
              </li>
              <li>
                <a href="https://www.dulux.in/en" target="_blank">
                  https://www.dulux.in/en
                </a>
              </li>
              <li>
                <a href="https://www.dulux.de/de" target="_blank">
                  https://www.dulux.de/de
                </a>
              </li>
            </ul>
          </RIGHT>
        </HEADER>
        <MAIN>
          <Tabs>
            <Nav>
              <ol>
                <Menuli
                  onClick={() => selectTab(0)}
                  selected={tabs[0]}
                  numTabs={6}
                >
                  <h4 selected>Front end</h4>
                </Menuli>
                <Menuli
                  onClick={() => selectTab(1)}
                  selected={tabs[1]}
                  numTabs={6}
                >
                  <h4>Back end</h4>
                </Menuli>
                <Menuli
                  onClick={() => selectTab(2)}
                  selected={tabs[2]}
                  numTabs={6}
                >
                  <h4>Database</h4>
                </Menuli>
                <Menuli
                  onClick={() => selectTab(3)}
                  selected={tabs[3]}
                  numTabs={6}
                >
                  <h4>Server</h4>
                </Menuli>
                <Menuli
                  onClick={() => selectTab(4)}
                  selected={tabs[4]}
                  numTabs={6}
                >
                  <h4>Provision & management</h4>
                </Menuli>
                <Menuli
                  onClick={() => selectTab(5)}
                  selected={tabs[5]}
                  numTabs={6}
                >
                  <h4>Design</h4>
                </Menuli>
              </ol>
            </Nav>
            <Tabcontainer>
              <Tab selected={tabs[0]} order={0}>
                <ul>
                  <li>CSS 1, 2, 3</li>
                  <li>Sass</li>
                  <li>HTML5</li>
                  <li>OO Javascript</li>
                  <li>jQuery</li>
                  <li>Moderniser</li>
                  <li>Knockout</li>
                  <li>Underscore</li>
                </ul>
              </Tab>
              <Tab selected={tabs[1]} order={1}>
                <ul>
                  <li>Grunt</li>
                  <li>Jasmine</li>
                </ul>
              </Tab>
              <Tab selected={tabs[2]} order={2}>
                <ul>
                  <li>Restful API</li>
                  <li>Mongodb</li>
                </ul>
              </Tab>
              <Tab selected={tabs[3]} order={3}>
                <ul>
                  <li></li>
                </ul>
              </Tab>
              <Tab selected={tabs[4]} order={4}>
                <ul>
                  <li>Git</li>
                  <li>Continous integration</li>
                  <li>Jira</li>
                  <li>Agile Scrum</li>
                </ul>
              </Tab>
              <Tab selected={tabs[5]} order={5}>
                <ul>
                  <li>Adobe Illustrator</li>
                </ul>
              </Tab>
            </Tabcontainer>
          </Tabs>
        </MAIN>
      </LI>
    </>
  );
};

export default ShowcaseItem;

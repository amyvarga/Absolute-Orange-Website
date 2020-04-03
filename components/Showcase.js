import { useState, useEffect } from "react";
import {
  LI,
  HEADER,
  LEFT,
  RIGHT,
  MAIN,
  TITLE,
  TABS,
  TAB,
  NAV,
  MENULI
} from "./styles/showcase";

const ShowcaseItem = () => {
  const tabDisplay = [
    useState(true),
    useState(false),
    useState(false),
    useState(false),
    useState(false),
    useState(false)
  ];
  const tabs = tabDisplay.reduce((acc, curr, i) => {
    return {
      ...acc,
      [i]: {
        isSelected: curr[0],
        setSelected: curr[1]
      }
    };
  }, {});

  const handleTabs = (selectedTab, e) => {
    Object.keys(tabs).forEach((tab, i) =>
      tabs[i].setSelected(i === selectedTab)
    );
  };
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
              <img src="images/showcaseLogos/dulux.jpg" alt="dulux" />
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
          <TABS>
            <NAV>
              <ol>
                <MENULI
                  onClick={e => handleTabs(0)}
                  selected={tabs[0].isSelected}
                >
                  <h4 selected>Front end</h4>
                </MENULI>
                <MENULI
                  onClick={e => handleTabs(1)}
                  selected={tabs[1].isSelected}
                >
                  <h4>Back end</h4>
                </MENULI>
                <MENULI
                  onClick={() => handleTabs(2)}
                  selected={tabs[2].isSelected}
                >
                  <h4>Database</h4>
                </MENULI>
                <MENULI
                  onClick={() => handleTabs(3)}
                  selected={tabs[3].isSelected}
                >
                  <h4>Server</h4>
                </MENULI>
                <MENULI
                  onClick={() => handleTabs(4)}
                  selected={tabs[4].isSelected}
                >
                  <h4>Provision & management</h4>
                </MENULI>
                <MENULI
                  onClick={() => handleTabs(5)}
                  selected={tabs[5].isSelected}
                >
                  <h4>Design</h4>
                </MENULI>
              </ol>
            </NAV>
            <TAB selected={tabs[0].isSelected}>
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
            </TAB>
            <TAB selected={tabs[1].isSelected}>
              <ul>
                <li>Grunt</li>
                <li>Jasmine</li>
              </ul>
            </TAB>
            <TAB selected={tabs[2].isSelected}>
              <ul>
                <li>Restful API</li>
                <li>Mongodb</li>
              </ul>
            </TAB>
            <TAB selected={tabs[3].isSelected}>
              <ul>
                <li></li>
              </ul>
            </TAB>
            <TAB selected={tabs[4].isSelected}>
              <ul>
                <li>Git</li>
                <li>Continous integration</li>
                <li>Jira</li>
                <li>Agile Scrum</li>
              </ul>
            </TAB>
            <TAB selected={tabs[5].isSelected}>
              <ul>
                <li>Adobe Illustrator</li>
              </ul>
            </TAB>
          </TABS>
        </MAIN>
      </LI>
    </>
  );
};

export default ShowcaseItem;

import { LI, HEADER, Left, Right, MAIN } from "./styles/showcase";
import { Table, Theader, Tbody } from "./styles/table";
import { Showcaseheading } from "./styles/headings";

const ShowcaseItem = () => {
  return (
    <>
      <LI>
        <HEADER>
          <Left>
            <Showcaseheading as="h2">
              Global e-commerce consumer website
            </Showcaseheading>
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
          </Left>
          <Right>
            <img src="images/showcaseLogos/dulux-new.jpg" alt="dulux" />
          </Right>
        </HEADER>
        <MAIN>
          <Table>
            <Theader>
              <tr>
                <td>
                  <h4>Front end</h4>
                </td>
              </tr>
            </Theader>
            <Tbody>
              <tr>
                <td>CSS 1, 2, 3</td>
              </tr>
              <tr>
                <td>Sass</td>
              </tr>
              <tr>
                <td>HTML5</td>
              </tr>
              <tr>
                <td>OO Javascript</td>
              </tr>
              <tr>
                <td>jQuery</td>
              </tr>
              <tr>
                <td>Moderniser</td>
              </tr>
              <tr>
                <td>Knockout</td>
              </tr>
              <tr>
                <td>Underscore</td>
              </tr>
            </Tbody>
          </Table>

          <Table>
            <Theader>
              <tr>
                <td>
                  <h4>Back end</h4>
                </td>
              </tr>
            </Theader>
            <Tbody>
              <tr>
                <td>Grunt</td>
              </tr>
              <tr>
                <td>Jasmine</td>
              </tr>
            </Tbody>
          </Table>
          <Table>
            <Theader>
              <tr>
                <td>
                  <h4>Database</h4>
                </td>
              </tr>
            </Theader>
            <Tbody>
              <tr>
                <td>Restful API</td>
              </tr>
              <tr>
                <td>Mongodb</td>
              </tr>
            </Tbody>
          </Table>
          <Table>
            <Theader>
              <tr>
                <td>
                  <h4>Provision & management</h4>
                </td>
              </tr>
            </Theader>
            <Tbody>
              <tr>
                <td>Git</td>
              </tr>
              <tr>
                <td>Continous integration</td>
              </tr>
              <tr>
                <td>Jira</td>
              </tr>
              <tr>
                <td>Agile Scrum</td>
              </tr>
            </Tbody>
          </Table>
          <Table>
            <Theader>
              <tr>
                <td>
                  <h4>Design</h4>
                </td>
              </tr>
            </Theader>
            <Tbody>
              <tr>
                <td>Adobe Illustrator</td>
              </tr>
            </Tbody>
          </Table>
        </MAIN>
      </LI>
    </>
  );
};

export default ShowcaseItem;

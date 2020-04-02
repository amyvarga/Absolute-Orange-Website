import { LI, HEADER, LEFT, RIGHT, MAIN, TITLE } from "./styles/showcase";

const ShowcaseItem = () => (
  <>
    <LI>
      <HEADER>
        <TITLE>
          <p><strong>Deliverable: </strong>Global e-commerce consumer website</p>
        </TITLE>

        <LEFT>
          <div className="logo">
            <img src="images/showcaseLogos/dulux.jpg" alt="dulux" />
          </div>
          <h3>AkzoNobel</h3>
        </LEFT>
        <RIGHT>
          <ul>
            <li><a href="https://www.dulux.co.uk" target="_blank">https://www.dulux.co.uk</a></li>
            <li><a href="https://www.dulux.com/fr" target="_blank">https://www.duluxvalentine.com</a></li>
            <li><a href="https://www.dulux.in/en" target="_blank">https://www.dulux.in/en</a></li>
            <li><a href="https://www.dulux.de/de" target="_blank">https://www.dulux.de/de</a></li>
          </ul>
        </RIGHT>
      </HEADER>
      <MAIN>

      </MAIN>
    </LI>
  </>
);

export default ShowcaseItem;
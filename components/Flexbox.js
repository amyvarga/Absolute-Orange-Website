import {
  List,
  ListItem,
  Wrapper,
  Heading,
  Para,
  Footer,
} from "./styles/flexbox";

const Flexbox = () => (
  <List>
    <ListItem>
      <Wrapper>
        <Heading>Title</Heading>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor
          interdum lacus, eget euismod metus efficitur at. Proin ullamcorper id
          neque in vehicula
        </Para>
        <Footer>Lorem ipsum dolor sit amet</Footer>
      </Wrapper>
    </ListItem>
    <ListItem>
      <Wrapper>
        <Heading>Title</Heading>
        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Para>
        <Footer>Lorem ipsum dolor sit amet</Footer>
      </Wrapper>
    </ListItem>
    <ListItem>
      <Wrapper>
        <Heading>Title</Heading>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor
          interdum lacus, eget euismod metus efficitur at.
        </Para>
        <Footer>Lorem ipsum dolor sit amet</Footer>
      </Wrapper>
    </ListItem>
    <ListItem>
      <Wrapper>
        <Heading>Title</Heading>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor
          interdum lacus, eget euismod metus efficitur at. Proin ullamcorper id
          neque in vehicula
        </Para>
      </Wrapper>
    </ListItem>
    <ListItem>
      <Wrapper>
        <Heading>Title</Heading>
        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Para>
        <Footer>Lorem ipsum dolor sit amet</Footer>
      </Wrapper>
    </ListItem>
    <ListItem>
      <Wrapper>
        <Heading>Title</Heading>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor
          interdum lacus, eget euismod metus efficitur at.
        </Para>
        <Footer>Lorem ipsum dolor sit amet</Footer>
      </Wrapper>
    </ListItem>
  </List>
);

export default Flexbox;

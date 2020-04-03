import GlobalStyle from "../css/globalstyle";

const App = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <GlobalStyle />
  </>
);

export default App;

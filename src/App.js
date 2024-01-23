import About from "./components/About";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Layout from "./components/Layout";
import Links from "./components/Links";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <Layout>
      {/* Left panel content */}
      <Header>
        <div>
          <Intro />
          <Nav />
        </div>
        <Links />
      </Header>

      {/* Right panel content */}
      <Main>
        <About />
        <Experiences />
      </Main>
    </Layout>
  );
}

export default App;

import "./App.scss";

import {
  About,
  Footer,
  Header,
  Skills,
  HowBuild,
  Work,
} from "./container/index";
import { Navbar } from "./components";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <HowBuild />
      <Footer />
    </div>
  );
}

export default App;

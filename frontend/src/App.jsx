import "./App.scss";

import {
  About,
  Footer,
  Header,
  Skills,
  HowBuild,
  Work,
} from "./container/index";
//import Details from "./container/details/Details";
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
      {/* <Route path='/details' element={<Details />} /> */}
      <Footer />
    </div>
  );
}

export default App;

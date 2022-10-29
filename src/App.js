
import Home from './Pages/Home'
import Header from '../src/compo/Header';
import Footers from './compo/Footers';
import About_us from './Pages/About_us';
import Forms from './compo/Forms';
import Pricing from './compo/Pricing';
function App() {
  return (
  <div>
    <Pricing />
    <br/>
      <Header />
      <Home />
      <Footers />
      <br/>
      <Header />
      <About_us/>
      <Footers />
      <br/>
      <Header />
      <Forms/>
      <Footers />




    </div>)
}

export default App;

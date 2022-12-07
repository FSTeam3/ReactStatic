
import Home from './Pages/Home'
import Header from '../src/compo/Header';
import Footers from './compo/Footers';
import About_us from './Pages/About_us';
import Forms from './compo/Forms';
import Pricing from './Pages/Pricing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './compo/Login';
function App() {
  return (

    <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Login />}/> */}
        <Route path="/" element={<><Header /> <Home /> <Footers /> </>}/>
          <Route path="about_us" element={<><Header /><About_us />  <Footers /> </>} />
          <Route path="pricing" element={<><Header /> <Pricing /> <Footers /> </>} />
          <Route path="forms" element={<><Header /> <Forms /> <Footers /> </>} />
        
      </Routes>
    </BrowserRouter>
    // <div>
    // <br/>
    //   <Header />
    //   <Home />
    //   <Footers />
    //   <br/>
    //   <br/>
    //   <br/>
    //   <Header />
    //   <About_us/>
    //   <Footers />
    //   <br/>
    //   <br/>
    //   <br/>
    //   <Header />
    //   <Forms/>
    //   <Footers />
    //   <br/>
    //   <br/>
    //   <br/>
    //   <Header />
    //   <Pricing />
    //   <Footers />




    // </div>
  )
}

export default App;

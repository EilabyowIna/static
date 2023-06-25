import { BrowserRouter } from "react-router-dom";
import  Appbar from './components/Appbar';
import  Body from './components/Body';
import  Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
      <div>
      <Appbar />
      </div>
      <div>
      <Body />
      </div>
      </div>
      <div>
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

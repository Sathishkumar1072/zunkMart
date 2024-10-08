import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/landingPage/LandingPage";
import RoutesFile from "./components/routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from 'react-router-dom'
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RoutesFile />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

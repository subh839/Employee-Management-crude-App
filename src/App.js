import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Dashboard from "./page/Dashboard";
import Summary from "./components/Summary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />        
          <Route path="/dashboard" exact component={Dashboard} />   
          <Route path="/contact" exact component={Contact} />
          <Route path="/summary" exact component={Summary} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;